import { create } from 'zustand';
import { DietPlan } from '@/interfaces/diets';
import { fetchDietPlanByEmail } from '../services/dietService';

interface DietState {
    dietplans: DietPlan[];
    dietplan: DietPlan | null;
    isLoading: boolean;
    isError: boolean;
    isUpdated: boolean;
    isCreated: boolean;
    errorMessage: string | null;
    // changeFields: (field: keyof Appointment, value: any) => void;
    getDietPlansByEmail: (email: string) => Promise<void>;
    getDietPlan: (dietPlan: DietPlan) => void;
    resetState: () => void;
}

const useDietStore = create<DietState>((set, get) => ({
    dietplans: [],
    dietplan: null,
    isLoading: false,
    isUpdated: false,
    isError: false,
    isCreated: false,
    errorMessage: null,


    getDietPlansByEmail: async (email) => {
        set({ isLoading: true, isError: false, errorMessage: null, isCreated: false });
        try {
            const response = await fetchDietPlanByEmail(email)
            set({ isLoading: false, dietplans: response })
        } catch (error: any) {
            handleError(set, error, 'Failed to fetch diet Plans');
        }
    },
    getDietPlan: (dietPlan) => {
        try {
            set({dietplan: dietPlan })
        } catch (error: any) {
            handleError(set, error, 'Failed to fetch diet Plans');
        }
    },

    resetState: () => {
        set({
            dietplans: [],
            dietplan: null,
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
    set: (state: Partial<DietState>) => void,
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

export default useDietStore;
