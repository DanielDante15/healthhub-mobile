import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

interface Props {
  title?: string;
  placeHolder?: string;
  editable?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'visible-password';
  borderColor?: string;
  titleColor?: string;
  value: string;
  onChange: (text: string) => void;
}

export default function PasswordInput({
  title,
  placeHolder,
  editable = true,
  keyboardType = 'default',
  borderColor = "black",
  titleColor = 'black',
  value,
  onChange,
}: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={{ width: '100%', justifyContent: 'center', alignContent: 'center', marginBottom: 12 }}>
      <Text style={{ fontSize: 15, fontWeight: '400', textAlign: 'left', marginBottom: 5, color: titleColor }}>{title}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          editable={editable}
          autoCorrect={false}
          keyboardType={keyboardType}
          autoCapitalize='none'
          placeholder={placeHolder}
          onChangeText={(text) => onChange(text)}
          value={value}
          secureTextEntry={secureTextEntry}
          style={{
            flex: 1,
            backgroundColor: 'white',
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
        />
        <TouchableOpacity onPress={toggleSecureEntry} style={{ padding: 10, position: 'absolute', right: "4%", top: "17%" }}>
          <MaterialIcons name={secureTextEntry ? 'visibility-off' : 'visibility'} size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
