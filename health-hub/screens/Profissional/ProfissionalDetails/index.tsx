import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { styles } from './style'; // Importando os estilos
import { AntDesign } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import RatingStar from '../../../components/RatingStar';
import Toast from 'react-native-toast-message';
import { useState } from 'react';
import { Button } from '../../../components/Button';
import { scheduleMock } from '../../../mocks/ScheduleMocks';
import ServiceCard from '../../../components/ServiceCard';
import { professionalsMock } from '../../../mocks/ProfissionalMocks';

export default function ProfissionalDetails({ }) {
  const navigation = useNavigation();
  const [fav, setFav] = useState(false)
  // const { params } = useRoute<RouteProp<Professional, 'ProfissionalDetails'>>();

  function agendarConsulta() {

    scheduleMock.push(
      {
        id: 5,
        date: '23/04/2023',
        isOnline: false,
        // professionalName: params.name,
        professionalName: "teste",
        status: 'pendente',
        time: "08h30",
        type: 'aula',
        address: 'Av. Daniel Macedo',
        meetingLink: "",
      }
    )

    Toast.show({
      type: "success",
      text1: "Aula agendada com sucesso",
      text2: "Aula marcada para o dia 17/05/2023",
    });
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => { navigation.goBack(); }} >
              <AntDesign size={30} name='arrowleft' />
            </TouchableOpacity>
            <Text style={{ color: "black", fontSize: 20, alignSelf: 'center', textAlign: 'center' }}>
              {professionalsMock[0]?.name}
            </Text>
            <TouchableOpacity onPress={() => setFav(!fav)}>
              <AntDesign size={30} name={fav ? 'heart' : 'hearto'} />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarContainer}>
            <View style={styles.profileInfo}>
            <Image source={professionalsMock[0]?.image ? { uri:professionalsMock[0]?.image } : require('../../../assets/images/notfound.png')} width={140} height={140} style={{borderRadius:10}} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{professionalsMock[0]?.name}</Text>
                <Text style={styles.profession}>{professionalsMock[0]?.service}</Text>
                <RatingStar rating={professionalsMock[0]?.rating} />
                <Text style={{ fontSize: 14 }}>{professionalsMock[0]?.education}</Text>
              </View>
            </View>

         
            <ScrollView style={styles.scrollView}>
              <ServiceCard
                data={professionalsMock[0]}
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button.Root onClick={() => { }} type='outlined' >
            <Button.Text style={{ fontSize: 18 }}>
              Entrar em contato
            </Button.Text>
          </Button.Root>
        </View>
      </View>
    </SafeAreaView>
  );
}
