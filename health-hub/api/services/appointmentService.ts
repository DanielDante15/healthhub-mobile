import { User } from "@/interfaces/user";
import api from "@/infra/api";
import { Appointment, AppointmentPost } from "@/interfaces/appointment";

export const fetchUsers = async () => {
    try {
        const response = await api.get('/users');

        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};
export const fetchSpecialists = async () => {
    try {
        const response = await api.get('/users/specialists');

        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};



export const updateUser = async ({ data }: { data: User }) => {
    try {
        const response = await api.patch(`/user/${data.id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(`u: ${error}`);
    }
};

export const postAppointment = async (data: AppointmentPost) => {
    try {
        console.log(data);
        const response = await api.post('/appointments/create', data);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create: ${error}`);
    }
};


export const fetchAppointmentsByEmail = async (email: string) => {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
        await sleep(1000);
        const response = await api.get(`/appointments-by-user/?user_email=${email}`);
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};