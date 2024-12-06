import React, { ReactNode } from 'react'
import { DimensionValue, StyleSheet, TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';


interface ButtonRootProps {
    children: ReactNode;
    type?: 'outlined' | 'normal'
    isLoading?: 'idle' | 'loading'|'ready';
    onClick?: () => void;
    gap?: number;
    width?: DimensionValue;
}


export function ButtonRoot({ children, isLoading, onClick, type = 'normal', gap = 10, width = "auto" }: ButtonRootProps) {
    const containerStyle = type === 'outlined' ? styles.containerOutlined : styles.containerNormal;



    return (
        <TouchableOpacity disabled={isLoading=='loading'?true:false} onPress={onClick} style={[containerStyle, styles.container, { gap: gap, width: width }]}>
            {isLoading == 'loading' ? <ActivityIndicator color='white' /> : children}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
    },
    containerNormal: {
        backgroundColor: "black",
    },
    containerOutlined: {
        borderColor: "black",
        borderWidth: 1,
    }
})
