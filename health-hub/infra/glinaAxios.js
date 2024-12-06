import axiosInstance from "./axiosInstance";

export async function GlinaAxios(url, method, body, token) {

    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    let configMultipart = {
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data"
        }
    }

    if (method === 'MULTIPART') {
        return axiosInstance.post(url, body, configMultipart);
    }

    if (method === "GET") {
        return (await axiosInstance.get(url, config)).data
    }

    if (method === "POST") {
        var response = await axiosInstance.post(url, body,config)
        return response;
    }
    if (method === "PUT") {
        return axiosInstance.put(url, JSON.stringify(body), config)
    }
    if (method === "DELETE") {
        return axiosInstance.delete(url, config)
    }

}