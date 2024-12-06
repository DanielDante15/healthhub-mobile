import { AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Schedule } from "../../mocks/ScheduleMocks";
import { styles } from "./styles";
import { TabActions, useNavigation } from "@react-navigation/native";
import { RootTabParamList } from "../../types";

interface ScheduleCardProps extends Schedule {
onClick?: () => void;
}

export default function ScheduleCard({
    date,
    isOnline,
    professionalName,
    status,
    time,
    type,
    address,
    meetingLink,
    onClick
}: ScheduleCardProps) {

    const navigation = useNavigation();

    function capitalize(text: string) {
        const firstLetter = text.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = text.slice(1)
        return firstLetterCap + remainingLetters
    }
    
    function handleButton() {
        navigation.dispatch(TabActions.jumpTo('Chat'))
    }

    const borderColor = status == "aceita"?'#2f9e44':"#f08c00"
    const bgColor = status == "aceita"?'#b2f2bb':"#ffd8a8"

    return (
        <TouchableOpacity  onPress={onClick} style={[styles.cardContainer, {backgroundColor:bgColor,borderColor:borderColor}]}>
            <View style={styles.title}>
                <Text style={{ fontSize: 22 }}>
                    {capitalize(type)} - {professionalName}
                </Text>
                <TouchableOpacity  onPress={handleButton}>
                    <MaterialCommunityIcons name="chat" size={21} color={status == "aceita"?'#2f9e44':"#f08c00"}/>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 18 }}>
                {isOnline ? "Online" : address}
            </Text>
            <View style={styles.date}>
                <Text style={{ fontSize: 18 }}>
                    {date} - {time}
                </Text>
                <Text style={{ fontSize: 17 }}>
                    {capitalize(status)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}