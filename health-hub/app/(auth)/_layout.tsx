import { Stack } from "expo-router";

export default function StackPage() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)"
                options={{ headerShown:false }}
            />
            <Stack.Screen name="teste"
                options={{ headerShown:true }}
            />
        </Stack>
    )
}