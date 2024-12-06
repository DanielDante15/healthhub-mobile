import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import ScheduleCard from '../../components/ScheduleCard';
import { Schedule, scheduleMock } from '../../mocks/ScheduleMocks';
import { Button, Dialog, PaperProvider, Portal } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Agenda() {
  const [pendingSchedule, setPendingSchedule] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState<Schedule | undefined>(undefined);
  const [visible, setVisible] = React.useState(false);


  const isFocused = useIsFocused();

  useEffect(() => {
  }, [isFocused])


  const showDialog = (e: Schedule) => {
    setCurrentSchedule(e);
    setVisible(true);

  }

  const showAlert = () => {
    hideDialog()
    Alert.alert(
      'Deletar agendamento',
      '\n Tem certeza que deseja exlcuir seu compromisso?',
      [
        {
          text: 'Excluir',
          onPress: () => {
            if (currentSchedule != undefined) {
              var index = scheduleMock.indexOf(currentSchedule);
              if (index > -1) {
                scheduleMock.splice(index, 1);
                setPendingSchedule(true);
                Toast.show({
                  type: "info",
                  text1: "Agendamento cancelado!",
                });
              }
            }
          },
          style: 'destructive',
        },
        {
          text: 'Cancelar',
          onPress: () => {
          },
          style: 'default',
        },
      ],
    );
  }

  const hideDialog = () => setVisible(false);

  const handlePress = () => {
    scheduleMock[2].status = 'aceita';
    setPendingSchedule(true);
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>


        <Text style={styles.title}>Agenda</Text>
        {scheduleMock.map((schedule, index) => (
          <ScheduleCard
            key={index}
            date={schedule.date}
            isOnline={schedule.isOnline}
            professionalName={schedule.professionalName}
            status={schedule.status}
            time={schedule.time}
            type={schedule.type}
            address={schedule.address}
            meetingLink={schedule.meetingLink}
            onClick={() => showDialog(schedule)}
          />
        ))}
      </ScrollView>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <Dialog.Title>Informações</Dialog.Title>
            <TouchableOpacity onPress={hideDialog} style={{ paddingHorizontal: 20 }} >
              <AntDesign name='close' size={20} />
            </TouchableOpacity>
          </View>



          <Dialog.Content>
            <Text>Profissional: {currentSchedule?.professionalName}</Text>
            <Text>Endereço: {currentSchedule?.address ?? 'Online'}</Text>
            <Text>Horário: {currentSchedule?.date} - {currentSchedule?.time}</Text>
          </Dialog.Content>
          <Dialog.Actions style={{ justifyContent: 'space-between' }}>
            <Button onPress={showAlert}>Cancelar Compromisso</Button>
            {currentSchedule?.isOnline ?
              <Button onPress={hideDialog}>Ir para sala</Button> :
              <Button onPress={hideDialog}>Ver no mapa</Button>
            }

          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
}
