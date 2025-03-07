import useServiceStore from "@/api/stores/serviceStore";
import { Stack, useGlobalSearchParams } from "expo-router";



export default function StackPage() {
    const { title } = useGlobalSearchParams();
    const { resetState} = useServiceStore();
    return (
        <Stack >
            <Stack.Screen name="(drawer)"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="diets"
                options={{ headerBackButtonDisplayMode: "minimal", headerTitle: "Detalhes da dieta" }}
            />
            <Stack.Screen name="workouts"
                options={{ headerBackButtonDisplayMode: "minimal", headerTitle: "Detalhes de treino" }}
            />
            <Stack.Screen name="professional"
                options={{ headerBackButtonDisplayMode: "minimal", headerTitle: 'Detalhes do profissional' }}
               
            />
            <Stack.Screen name="service"
                options={{
                    presentation: 'modal',
                    headerTitle: title?.toString() 
                }}
                
            />

        </Stack>
    )
}