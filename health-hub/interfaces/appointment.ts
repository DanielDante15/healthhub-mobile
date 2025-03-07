export interface Appointment {
    id: number
    user_common: number; // Número de usuários comuns
    user_specialist: number;
    specialist_name: string,// Número de usuários especialistas
    date_time: string; // Data e hora do agendamento em formato ISO 8601
    duration: string;
    appointment_type: string,
    address_or_link: string,
    is_online: boolean,
    status: string
}

export interface AppointmentPost {
    user_common_email: string; // Número de usuários comuns
    user_specialist_email: string; // Número de usuários especialistas
    date_time: string; // Data e hora do agendamento em formato ISO 8601
    duration: string;
    is_online?: boolean;
    address_or_link?: string,
    // Duração do agendamento em formato HH:mm:ss
}