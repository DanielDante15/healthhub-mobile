import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { styles } from './styles';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import { Button } from '../../components/Button';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import  { jwtDecode } from 'jwt-decode'; // Importação correta
import { router } from 'expo-router';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function decodeToken(token: string) {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded);
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  // function handleLogin() {
  //   dispatch(login({ email, senha: password }));
  // }

  // useEffect(() => {
  //   if (token) {
  //     decodeToken(token);
  //   }
  // }, [token]);

  // useEffect(() => {
  //   if (error) {
  //     Toast.show({
  //       type: "error",
  //       text1: "Erro!",
  //       text2: error,
  //     });
  //   }
  // }, [error]);

  // const handleRegister = () => navigation.navigate('CadastroCliente');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Health Hub</Text>
          <View style={styles.inputContainter}>
            <Input value={email} onChange={setEmail} title='Username' />
            <PasswordInput value={password} onChange={setPassword} title='Password' />
          </View>
          <View style={styles.buttonStyles}>
            <Button.Root isLoading={'ready'} onClick={()=>{router.replace("/(auth)/(tabs)")}} type='normal' gap={20} width="100%" >
              <AntDesign name='login' size={24} color="white" />
              <Button.Text style={styles.loginButton}>
                Login
              </Button.Text>
            </Button.Root>
            {/* <Button.Root onClick={handleRegister} type='outlined' gap={20} width="100%">
              <AntDesign name='adduser' size={30} />
              <Button.Text style={{ fontSize: 30 }}>
                Register
              </Button.Text>
            </Button.Root> */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
