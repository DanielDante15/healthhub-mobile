import { create } from 'zustand';
import { fetchUsers } from '../services/userService';
import { fetchServiceById, fetchServicesByEmail } from '../services/serviceService';

interface ServiceState {
    services: Service[];
    service: Service | null;
    isLoading: boolean;
    isError: boolean;
    isUpdated: boolean;
    isCreated: boolean;
    errorMessage: string | null;
    changeFields: (field: keyof Service, value: any) => void;
    // createUser: (data: User) => Promise<void>;
    getAllServices: () => Promise<void>;
    resetState: () => void;
    getServicesByEmail: (email: string) => Promise<void>;
    getServiceById: (id: string) => Promise<void>;
}

const useServiceStore = create<ServiceState>((set, get) => ({
    services: [],
    service: null,
    isLoading: false,
    isUpdated: false,
    isError: false,
    isCreated: false,
    errorMessage: null,

    getAllServices: async () => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            const service = await fetchUsers();
            set({ service, isLoading: false });
        } catch (error: any) {
            handleError(set, error, 'Failed to fetch users');
        }
    },




    // createUser: async (data: User) => {
    //     set({ isLoading: true, isError: false, errorMessage: null });
    //     try {
    //         await createNewUser(data);
    //         set({ isLoading: false, isCreated: true });
    //         get().getAllServices();
    //     } catch (error: any) {
    //         handleError(set, error, `Failed to create user: ${data.name}`);
    //     }
    // },

    changeFields: (field, value) =>
        set((state) => ({
            service: state.service ? { ...state.service, [field]: value } : state.service,
        })),

    getServicesByEmail: async (email: string) => {
        set({ isLoading: true, isError: false, errorMessage: null,services:[]});
        try {
            const services = await fetchServicesByEmail(email);
            set({ services, isLoading: false });
        } catch (error: any) {
            handleError(set, error, `Failed to fetch services by Email: ${email}`);
        }
    },

    getServiceById: async (id: string) => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            const service = await fetchServiceById(id);
            set({ service, isLoading: false });
        } catch (error: any) {
            handleError(set, error, `Failed to fetch service by ID: ${id}`);
        }
    },

    resetState: () => {
        set({
            services: [],
            service: null,
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
    set: (state: Partial<ServiceState>) => void,
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

export default useServiceStore;
