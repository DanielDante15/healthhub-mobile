import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles'
import ProfissionalCard from '../../components/ProfissionalCard';
import { professionalsMock } from '../../mocks/ProfissionalMocks';



export default function Home({ }) {
  return (
    <ScrollView style={styles.container}>
      {professionalsMock.map((professional) => (
        <ProfissionalCard
          key={professional.name}
          data={professional}
        />
      ))}
    </ScrollView>
  );
}
