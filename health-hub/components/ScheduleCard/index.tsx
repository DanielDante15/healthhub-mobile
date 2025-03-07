import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { styles } from './style'
import RatingStar from '../RatingStar';
import { router } from 'expo-router';
import { User } from '@/interfaces/user';
import { Appointment } from '@/interfaces/appointment';
import { Ionicons } from '@expo/vector-icons';


interface CardButtonProps {
    data: Appointment
}


function ScheduleCard({ data }: CardButtonProps) {

    const date = new Date(data.date_time)

    return (
        <View style={styles.container}

        >
            <View style={styles.card}>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {data.specialist_name} - {data.appointment_type.toUpperCase()}
                    </Text>
                    <View style={styles.serviceContainer}>
                        <Text style={styles.service}>
                            {parseDurationToMonths(data.duration)}
                        </Text>
                    </View>
                    {!data.is_online ?
                        <TouchableOpacity>
                            <Text style={{ marginTop: 5, color: "blue" }}>
                                <Ionicons name='location' color="red" size={15} /> {data.address_or_link ?? 'Sem Localização'}
                            </Text>
                        </TouchableOpacity> :
                        <TouchableOpacity>
                            <Text style={{}}>
                                Link da Sala:<Text style={{ marginTop: 5, color: "blue" }}>{" "}{data.address_or_link ?? 'Sem Localização'}</Text>
                            </Text>
                        </TouchableOpacity>}
                </View>
                <Text>
                    {formatDate(date, 'DD/MM \nHHhmm')}
                </Text>
            </View>
        </View>
    )
}

function formatDate(date: Date, mask: string) {
    const options: any = {
        'YYYY': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'DD': String(date.getDate()).padStart(2, '0'),
        'HH': String(date.getHours()).padStart(2, '0'),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'ss': String(date.getSeconds()).padStart(2, '0')
    };

    return mask.replace(/YYYY|MM|DD|HH|mm|ss/g, match => options[match]);
}

function parseDurationToMonths(duration: string): string {
    const [daysPart] = duration.split(" ");
    const minutes = parseInt(daysPart, 10);
    const remainingDays = minutes % 30;

    return `${remainingDays} ${remainingDays === 1 ? "hora" : "horas"}`;

}

export default ScheduleCard;
