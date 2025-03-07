import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { styles } from './style'
import RatingStar from '../RatingStar';
import { useNavigation } from '@react-navigation/native';
import { Professional } from '../../mocks/ProfissionalMocks';
import { router } from 'expo-router';
import { User } from '@/interfaces/user';


interface CardButtonProps {
    data: User
}


function ProfissionalCard({ data }: CardButtonProps) {


    return (
        <TouchableOpacity style={styles.container}
            onPress={() => {
                router.push({
                    pathname: "/(auth)/professional",
                    params: {
                     id:data.id
                    }
                });
            }}
        >
            <View style={styles.card}>
                <Avatar.Image size={75} source={require('@/assets/images/pessoa.png')} style={{ backgroundColor: "gray" }} />
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {data.name}
                    </Text>
                    <View style={styles.serviceContainer}>
                        <Text style={styles.service}>
                            {data.role.toUpperCase()}
                        </Text>
                        <Text style={styles.price}>
                            Campinas
                        </Text>
                    </View>
                    <RatingStar rating={data.specialist_info?.rating} small />
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ProfissionalCard;
