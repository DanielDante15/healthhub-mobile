export type SpecialistInfo = {
    id: number;
    description: string;
    education: string;
    certificate: string;
    rating: string;
    user: number;
} | null;

export type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    height: number;
    role: string;
    specialist_info: SpecialistInfo;
};