import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { styles } from './style'
import RatingStar from '../RatingStar';
import { useNavigation } from '@react-navigation/native';
import { Professional } from '../../mocks/ProfissionalMocks';
import { AntDesign } from '@expo/vector-icons';


interface CardButtonProps {
    data: Professional
}


function ServiceCard({ data }: CardButtonProps) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate("ProfissionalDetails", data) }}>
            <View style={styles.card}>
                <Avatar.Image size={75} source={data.image ? { uri: data.image } : require('../../assets/images/notfound.png')} style={{ backgroundColor: "gray" }} />
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {data.service}
                    </Text>
                    <View style={styles.serviceContainer}>
                        <Text style={styles.service}>
                            {data.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </Text>
                        <AntDesign name='right' size={20}/>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ServiceCard;
