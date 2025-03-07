import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function Layout() {
  const [userInfo, setUserInfo] = useState<any | null>(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user-info");
        setUserInfo(jsonValue != null ? JSON.parse(jsonValue) : "Token não encontrado");
      } catch (e) {
        console.error("Erro ao recuperar o token:", e);
        setUserInfo(null);
      }
    };

    fetchData();
  }, [])

  const clearToken = async () => {
    try {
      Alert.alert(
        'Confirmação',
        'Deseja realmente sair?',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Sim', onPress: () => {
              AsyncStorage.clear();
              router.replace("/(public)/login")
            }
          },
        ]
      );

    } catch (e) {
      console.error("Erro ao resetar o token:", e);
    }
  };


  const customLeftHeader = () => (
    <View style={style.leftHeaderContainer}>
      <Avatar.Image size={65} source={require('@/assets/images/dante.jpeg')} />
      <Text style={style.leftHeaderTitle}>
        Olá,{"\n"}{userInfo?.name}
      </Text>
      <View style={style.leftHeaderNotifications}>
        <TouchableOpacity onPress={clearToken} >
          <Ionicons name="log-out-outline" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName="tabs" screenOptions={{
        drawerPosition: "right", drawerType: 'front',
      }} >
        <Drawer.Screen
          name="tabs"
          options={({ navigation }) => ({
            headerLeft: customLeftHeader,
            headerStyle: style.headerStyle,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20, marginBottom: 10 }}
              >
                <Ionicons name="menu" size={30} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "",
            title: "Tela inicial"
          })}
        />
        <Drawer.Screen
          name="teste"
          options={({ navigation }) => ({
            headerLeft: customLeftHeader,
            headerStyle: style.headerStyle,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20, marginBottom: 10 }}
              >
                <Ionicons name="menu" size={30} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "",
            title: "Configurações"
          })}
        />



      </Drawer>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  headerStyle: {
    maxHeight: 135,
    minHeight: 135,
    shadowOpacity: .2
  },

  leftHeaderContainer: {
    marginLeft: 20,
    marginBottom: 10,
    flexDirection: "row"
  },
  leftHeaderTitle: {
    alignSelf: "center",
    marginLeft: 10,
    fontSize: 18
  },
  leftHeaderNotifications: {
    alignSelf: "center",
    marginLeft: 70
  },
  leftHeaderNotificationContainer: {
    position: "absolute",
    left: 20,
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 20
  },
  leftHeaderNotificationText: {
    fontSize: 14,
    bottom: .5,
    textAlign: "center",
    color: "white"
  }
});
