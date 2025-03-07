import useAppointmentStore from "@/api/stores/appointmentStore";
import useServiceStore from "@/api/stores/serviceStore";
import { Button } from "@/components/Button";
import { AppointmentPost } from "@/interfaces/appointment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Toast from "react-native-toast-message";

function ServiceDetailScreen() {
    const { id } = useLocalSearchParams();
    const { getServiceById, service, resetState: resetServices } = useServiceStore();
    const { createAppointment, isCreated, resetState } = useAppointmentStore();
    const now = new Date();


    useEffect(() => {
        if (id) {
            getServiceById(id.toString())
        }
    }, [resetServices, getServiceById, id])


    useEffect(() => {

        if (isCreated) {
            Toast.show({
                type: "success",
                text1: "Aula agendada com sucesso",
                text2: `Aula marcada para o dia ${now}`,
            });
            router.replace('/(auth)/(drawer)/tabs/home')
            resetState()
        }

    }, [isCreated])

    async function createNewAppointment(isOnline: boolean) {
        const token = await AsyncStorage.getItem('user-info');
        const userObj = token == null ? {} : JSON.parse(token)

        console.log(service?.specialist);


        if (service) {
            const now = new Date();
            const date = now.toISOString();

            const appData: AppointmentPost = {
                user_common_email: userObj.email,
                user_specialist_email: service.specialist,
                date_time: date,
                duration: "01:00:00",
                address_or_link: isOnline ? "https://www.corinthians.com.br/" : "Av. Carlos Lacerda, nº53",
                is_online: isOnline
            }

            createAppointment(appData)
        }

    }

    return (
        <View style={styles.container}>
            {
                service ? <Text style={{ flex: 2 }}>
                    {JSON.stringify(service)}
                </Text> : <ActivityIndicator />
            }
            <View style={styles.buttonsContainer}>
                <Button.Root onClick={() => { createNewAppointment(true) }} type='normal' >
                    <Button.Text style={{ fontSize: 18, color: "white" }}>
                        Agendar Online
                    </Button.Text>

                </Button.Root>
                <Button.Root onClick={() => { createNewAppointment(false) }} type='outlined' >
                    <Button.Text style={{ fontSize: 18, color: "black" }}>
                        Agendar Presencial
                    </Button.Text>
                </Button.Root>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 10
    },
    header: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center',
        paddingVertical: 15
    },
    avatarContainer: {
        width: "100%",
        justifyContent: "center",
        flex: 1,
    },
    profileInfo: {
        paddingHorizontal: 10,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        backgroundColor: "#ddd",
        flexDirection: "column",
        paddingVertical: 20,
    },
    avatar: {
        alignSelf: 'center',
    },
    infoContainer: {
        marginLeft: 15,
    },
    name: {
        alignSelf: "flex-start",
        fontSize: 22,
    },
    profession: {
        alignSelf: "flex-start",
        fontSize: 18,
    },
    infoView: {
        paddingHorizontal: 20,
        paddingTop: 10,
        width: "100%"
    },
    description: {
        marginTop: 20,
        fontSize: 16,
    },
    formation: {

        marginTop: 20,
        marginBottom: 5,
        fontSize: 18,
    },
    buttonsContainer: {
        flex: .6,
        gap: 10,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: "gray",
    },
});

export default ServiceDetailScreen;