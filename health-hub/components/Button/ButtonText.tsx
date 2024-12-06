import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

interface ButtonTextProps extends TextProps {
    children: ReactNode;

}

function ButtonText({ children, ...rest }: ButtonTextProps) {
    return (<Text {...rest} >
        {children}
    </Text>);
}

export default ButtonText;