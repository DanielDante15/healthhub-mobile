import api from "@/infra/api";

type data = {
    email: string;
    password: string;
}

export const loginService = async (data: data) => {

    try {
        const response = await api.post('/login', data);
        
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
};