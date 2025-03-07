import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from "expo-router";

import { useNavigation } from '@react-navigation/native';
import RatingStar from '@/components/RatingStar';
import { useEffect } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { ActivityIndicator, Avatar } from 'react-native-paper';
import useUserStore from '@/api/stores/userStore';
import useServiceStore from '@/api/stores/serviceStore';

export default function ProfissionalDetails() {
    const navigation = useNavigation();
    const { getUserById, user, isLoading, resetState: resetUser } = useUserStore();
    const { getServicesByEmail, services, isLoading: isServiceLoading, resetState } = useServiceStore();
    const { id } = useLocalSearchParams();

    useEffect(() => {
        getUserById(`${id}`);
    }, [resetState, getUserById])

    useEffect(() => {
        if (user) {
            resetState()
            getServicesByEmail(user.email)
        }
    }, [, user, getServicesByEmail])




    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator style={{ flex: 1 }} />
                : <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <ScrollView >
                            <View style={styles.profileInfo}>
                                <View style={{ display: "flex", flexDirection: "row" }}>
                                    <Avatar.Image size={120} style={{ backgroundColor: "gray" }} source={require('@/assets/images/pessoa.png')} />
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.name}>{user?.name}</Text>
                                        <Text style={styles.profession}>{user?.role}</Text>
                                        <RatingStar rating={user?.specialist_info?.rating} />
                                        <Text style={{ fontSize: 14 }}>{user?.specialist_info?.education}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ marginTop: 10, marginBottom: 2, fontSize: 18, fontWeight: '700' }}>Sobre</Text>
                                    <Text style={{ fontSize: 15 }}>{user?.specialist_info?.description}</Text>

                                </View>
                            </View>

                            <View style={styles.infoView}>
                                <Text style={styles.title}>Serviços</Text>
                                {isServiceLoading ? <ActivityIndicator /> :
                                    services.length != 0 ? services.map(data => (
                                        <ServiceCard
                                            key={data.id}
                                            data={data}
                                        />
                                    )) : <Text>Sem serviços no momento</Text>}


                            </View>


                        </ScrollView>
                    </View>
                </View>
            }

            {/* <View style={styles.buttonsContainer}>
                    <Button.Root onClick={() => { }} type='outlined' >
                        <Button.Text style={{ fontSize: 18 }}>
                            Entrar em contato
                        </Button.Text>
                    </Button.Root>
                </View> */}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        bottom: 20,
        width: "100%",
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: "gray",
        flex: .5,
    },
});

