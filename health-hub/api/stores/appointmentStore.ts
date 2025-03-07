import { create } from 'zustand';

import { User } from '@/interfaces/user';
import { Appointment, AppointmentPost } from '@/interfaces/appointment';
import { fetchAppointmentsByEmail, postAppointment } from '../services/appointmentService';

interface AppointmentState {
    appointments: Appointment[];
    appointment: Appointment | null;
    isLoading: boolean;
    isError: boolean;
    isUpdated: boolean;
    isCreated: boolean;
    errorMessage: string | null;
    // changeFields: (field: keyof Appointment, value: any) => void;
    createAppointment: (data: AppointmentPost) => Promise<void>;
    getAllAppointments: () => Promise<void>;
    getAppointmentsByEmail: (email: string) => Promise<void>;
    resetState: () => void;
}

const useAppointmentStore = create<AppointmentState>((set, get) => ({
    appointments: [],
    appointment: null,
    isLoading: false,
    isUpdated: false,
    isError: false,
    isCreated: false,
    errorMessage: null,

    getAllAppointments: async () => {
        set({ isLoading: true, isError: false, errorMessage: null, isCreated: false });
        try {

        } catch (error: any) {
            handleError(set, error, 'Failed to fetch appointments');
        }
    },
    getAppointmentsByEmail: async (email) => {
        set({ isLoading: true, isError: false, errorMessage: null, isCreated: false });
        try {
            const response = await fetchAppointmentsByEmail(email)
            set({ isLoading: false, appointments: response })
        } catch (error: any) {
            handleError(set, error, 'Failed to fetch appointments');
        }
    },

    createAppointment: async (data: AppointmentPost) => {
        set({ isLoading: true, isError: false, errorMessage: null });
        try {
            await postAppointment(data);
            set({ isLoading: false, isCreated: true });
        } catch (error: any) {
            handleError(set, error, `Failed to create appointment: ${data.user_common_email}`);
        }
    },


    resetState: () => {
        set({
            appointments: [],
            appointment: null,
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
    set: (state: Partial<AppointmentState>) => void,
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

export default useAppointmentStore;
