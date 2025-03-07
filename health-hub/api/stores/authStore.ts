import { create } from 'zustand';
import { loginService } from '../services/authService';
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUserById } from '../services/userService';

interface AuthState {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
    authenticate: (data: { email: string, password: string }) => Promise<void>;
}

const useAuthStore = create<AuthState>((set, get) => ({
    isLoading: false,
    isError: false,
    errorMessage: null,
    authenticate: async (data) => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            const tokenData = await loginService(data);
            const tokenObj: any = jwtDecode(tokenData.access)
            const decodedToken = JSON.stringify(tokenObj)
            const userInfo = await fetchUserById(tokenObj.user_id)

            await AsyncStorage.setItem('email', userInfo.email);
            await AsyncStorage.setItem('user-token', decodedToken);
            await AsyncStorage.setItem('user-info', JSON.stringify(userInfo));

            set({ isLoading: false });
        } catch (error: any) {
            handleError(set, error, 'Failed to authenticate');
        }
    },
}));

function handleError(
    set: (state: Partial<AuthState>) => void,
    error: any,
    message: string
) {
    console.error(message, error);
    set({
        isError: true,
        isLoading: false,
        errorMessage: error?.message || message,
    });
}

export default useAuthStore;
