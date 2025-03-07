import { create } from 'zustand';

import { User } from '@/interfaces/user';
import { createNewUser, fetchUserById, fetchUsers, updateUser, fetchSpecialists } from '../services/userService';

interface UserState {
    users: User[];
    user: User | null;
    isLoading: boolean;
    isError: boolean;
    isUpdated: boolean;
    isCreated: boolean;
    errorMessage: string | null;
    changeFields: (field: keyof User, value: any) => void;
    updateUserInfo: (data: User) => Promise<void>;
    createUser: (data: User) => Promise<void>;
    getAllUsers: () => Promise<void>;
    getAllSpecialists: () => Promise<void>;
    resetState: () => void;
    getUserById: (id: string) => Promise<void>;
}

const useUserStore = create<UserState>((set, get) => ({
    users: [],
    user: null,
    isLoading: false,
    isUpdated: false,
    isError: false,
    isCreated: false,
    errorMessage: null,

    getAllUsers: async () => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            const users = await fetchUsers();
            set({ users, isLoading: false });
        } catch (error: any) {
            handleError(set, error, 'Failed to fetch users');
        }
    },
    getAllSpecialists: async () => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            const specialists = await fetchSpecialists();
            set({ users: specialists, isLoading: false });
        } catch (error: any) {
            handleError(set, error, 'Failed to fetch Specialists');
        }
    },

    updateUserInfo: async (data: User) => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            const updatedUser = await updateUser({ data });
            set({ user: updatedUser, isLoading: false, isUpdated: true });
        } catch (error: any) {
            handleError(set, error, `Failed to update user: ${data.name}`);
        }
    },

    createUser: async (data: User) => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            await createNewUser(data);
            set({ isLoading: false, isCreated: true });
            get().getAllUsers();
        } catch (error: any) {
            handleError(set, error, `Failed to create user: ${data.name}`);
        }
    },

    changeFields: (field, value) =>
        set((state) => ({
            user: state.user ? { ...state.user, [field]: value } : state.user,
        })),

    getUserById: async (id: string) => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            const user = await fetchUserById(id);
            set({ user, isLoading: false });
        } catch (error: any) {
            handleError(set, error, `Failed to fetch user by ID: ${id}`);
        }
    },

    resetState: () => {
        set({
            users: [],
            user: null,
            isLoading: false,
            isError: false,
            isUpdated: false,
            isCreated: false,
            errorMessage: null,
        });
    },
}));

// Função auxiliar para tratar erros
function handleError(
    set: (state: Partial<UserState>) => void,
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

export default useUserStore;
