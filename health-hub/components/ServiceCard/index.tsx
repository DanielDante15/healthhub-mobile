import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { styles } from './style'

import { router } from 'expo-router';


interface CardButtonProps {
    data: Service
}


function ServiceCard({ data }: CardButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                router.push({
                    pathname: "/(auth)/service",
                    params: {
                        id: data.id,
                        title: data.title
                    },
                });
            }}
        >
            <View style={styles.card}>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {data.title}
                    </Text>
                    <Text style={styles.description} numberOfLines={3}>
                        {data.description}
                    </Text>
                    <View style={styles.serviceContainer}>
                        <Text style={styles.price}>
                            {parseFloat(data.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                        </Text>
                        <Text style={styles.time}>{parseDurationToMonths(data.duration)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

function parseDurationToMonths(duration: string): string {
    const [daysPart] = duration.split(" ");
    const days = parseInt(daysPart, 10);

    const months = Math.floor(days / 30);
    const remainingDays = days % 30;

    if (months > 0) {
        return `${months} ${months === 1 ? "mês" : "meses"}${remainingDays > 0 ? ` e ${remainingDays} ${remainingDays === 1 ? "dia" : "dias"}` : ""
            }`;
    } else {
        return `${remainingDays} ${remainingDays === 1 ? "dia" : "dias"}`;
    }
}


export default ServiceCard;
