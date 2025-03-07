import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { styles } from './styles';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import { Button } from '../../components/Button';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import useAuthStore from '@/api/stores/authStore';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate, isLoading } = useAuthStore();

  function handleLogin() {
    authenticate({ email, password })
  }

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('user-token');
        const tokenData = token != null ? JSON.parse(token) : null;


        if (tokenData && token) {

          const currentTime = Date.now() / 1000;
          if (tokenData.exp > currentTime) {
            router.replace('/(auth)/(drawer)/tabs/home');
          } else {
            await AsyncStorage.removeItem('user-token');
          }
        } else {
          console.log("nao logado");
          return
        }
      } catch (e) {
        return
      }
    };

    checkToken();
  }, [handleLogin, router]);


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
            <Button.Root isLoading={isLoading} onClick={handleLogin} type='normal' gap={20} width="100%" >
              <AntDesign name='login' size={24} color="white" />
              <Button.Text style={styles.loginButton}>
                Login
              </Button.Text>
            </Button.Root>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
