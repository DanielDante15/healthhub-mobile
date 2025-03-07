import api from "@/infra/api";

// export const fetchServices = async () => {
//     try {
//         const response = await api.get('/users');

//         return response.data;
//     } catch (error) {
//         throw new Error(JSON.stringify(error));
//     }
// };
// export const fetchSpecialists = async () => {
//     try {
//         const response = await api.get('/users/specialists');

//         return response.data;
//     } catch (error) {
//         throw new Error(JSON.stringify(error));
//     }
// };


export const fetchServicesByEmail = async (email: string) => {

    try {
        const response = await api.get(`/services-by-specialist/?specialist_email=${email}`);
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};
export const fetchServiceById = async (id: string) => {

    try {
        const response = await api.get(`/services/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};
// export const updateUser = async ({ data }: { data: User }) => {
//     try {
//         const response = await api.patch(`/user/${data.id}`, data);
//         return response.data;
//     } catch (error) {
//         throw new Error(`u: ${error}`);
//     }
// };
// export const createNewUser = async (data: User) => {
//     try {
//         const response = await api.post('/user', data);
//         return response.data;
//     } catch (error) {
//         throw new Error(`Failed to create: ${error}`);
//     }
// };
