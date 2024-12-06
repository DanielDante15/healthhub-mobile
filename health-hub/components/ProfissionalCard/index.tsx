import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { styles } from './style'
import RatingStar from '../RatingStar';
import { useNavigation } from '@react-navigation/native';
import { Professional } from '../../mocks/ProfissionalMocks';


interface CardButtonProps {
    data: Professional
}


function ProfissionalCard({ data}: CardButtonProps) {

    const navigation = useNavigation();
   
    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate("ProfissionalDetails",data) }}>
            <View style={styles.card}>
                <Avatar.Image size={75} source={data.image?{uri:data.image}:require('../../assets/images/notfound.png')} style={{backgroundColor:"gray"}} />
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {data.name}
                    </Text>
                    <View style={styles.serviceContainer}>
                        <Text style={styles.service}>
                            {data.service}
                        </Text>
                        <Text style={styles.price}>
                            Campinas
                        </Text>
                    </View>
                    <RatingStar rating={data.rating} small />
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ProfissionalCard;
