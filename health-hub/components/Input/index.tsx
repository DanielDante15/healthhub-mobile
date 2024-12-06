import { View, Text, ColorValue, KeyboardTypeOptions } from 'react-native'
import { TextInput } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input'
const CEP_MASK = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
const RG_MASK = [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/
]

import { cnpj_custom } from '../../infra/masks'
interface props {
    title?: string
    mask?: 'CEP' | 'CEL' | 'CNPJ' | 'CPF' | 'MONEY' | 'CPF_CNPJ' | 'RG' | 'DATE'
    keyboardType?: KeyboardTypeOptions
    placeHolder?: string,
    titleColor?: any
    onSubmitEditing?: any
    borderColor?: ColorValue
    value: string
    editable?: boolean
    numeric?: boolean
    onChange: (text: string) => void;
}

export default function Input({
    mask,
    title,
    placeHolder,
    editable = true,
    keyboardType = "default",
    borderColor = "black",
    titleColor = "black",
    value,
    onChange,
    onSubmitEditing = null,
}: props) {
    function getMask(maskType: string) {
        if (maskType === 'CEP') {
            return CEP_MASK
        }

        if (maskType === 'CEL') {
            return Masks.BRL_PHONE
        }

        if (maskType === 'CNPJ') {
            return cnpj_custom
        }

        if (maskType === 'CPF') {
            return Masks.BRL_CPF
        }

        if (maskType === 'MONEY') {
            return Masks.BRL_CURRENCY
        }
        if (maskType === 'CPF_CNPJ') {
            return Masks.BRL_CPF_CNPJ
        }
        if (maskType === 'RG') {
            return RG_MASK
        }
        if (maskType === 'DATE') {
            return Masks.DATE_DDMMYYYY
        }
    }

    return (
        <View
            style={{
                width: "100%",
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 12,

            }}
        >

            <Text style={{
                fontSize: 15,
                fontWeight: '400',
                textAlign: 'left',
                marginBottom: 5,
                color: titleColor
            }}>
                {title}
            </Text>

            {mask
                ? <MaskInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    editable={editable}
                    keyboardType={keyboardType}
                    style={{
                        backgroundColor: "white",
                        borderColor: borderColor,
                        borderWidth: 1.3,
                        borderRadius: 12,
                        padding: 10,
                        color: 'black',
                        minHeight: 55,
                        marginTop: 5,
                        fontSize: 15,
                        height: 55,
                    }}
                    value={value}
                    placeholder={placeHolder}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={(val) => {onChange(val)}}
                    mask={mask ? getMask(mask) : undefined}
                /> :
                <TextInput
                    editable={editable}
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    autoCapitalize='none'
                    placeholder={placeHolder}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={(val) => {onChange(val)}}
                    value={value}
                    style={{
                        backgroundColor: "white",
                        borderColor: borderColor,
                        borderWidth: 1.3,
                        borderRadius: 12,
                        padding: 10,
                        color: 'black',
                        minHeight: 55,
                        marginTop: 5,
                        fontSize: 15,
                        height: 55,
                    }} />
            }
        </View>
    )
}