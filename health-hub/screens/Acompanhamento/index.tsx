import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Dietas from "../Dietas";
import Treinos from "../Treinos";

export default function Acompanhamento() {
    const [tab, setTab] = useState<boolean>(false)
    const buttonColor: StyleProp<ViewStyle> = { backgroundColor: "#ddd" }
    return (
        <View style={styles.container}>
            <View style={styles.tab}>
                <TouchableOpacity style={[styles.tabButton, !tab && buttonColor]} onPress={() => setTab(false)}>
                    <Text style={styles.textButton}>
                        Dietas
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabButton, tab && buttonColor]} onPress={() => setTab(true)}>
                    <Text style={styles.textButton}>
                        Treinos
                    </Text>
                </TouchableOpacity>
            </View>

            {tab ? <Treinos /> : <Dietas />}

        </View>
    )
}