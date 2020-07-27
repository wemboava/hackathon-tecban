import * as React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  ButtonWrapper,
  ViewWrapper,
} from './styles';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ height: 90, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#5D0DE0', paddingTop: 40, paddingLeft: 20, paddingRight: 50 }}>
        <ButtonWrapper onPress={() => navigation.navigate('Profile')}>
          <Image style={{ width: 20, height: 23, marginRight: 15, marginTop: 5 }} source={require('../../assets/images/arrow.png')} />
        </ButtonWrapper>
        <Title>Metas</Title>
        <View />
      </View>
      <Container>
        <View style={{ width: '100%', justifyContent:'center', alignItems: 'center', marginTop: 10, backgroundColor: '#F2F6F9', marginBottom: 40 }}>
          <ViewWrapper>
            <Image style={{ width: 27, height: 30, marginRight: 15 }} source={require('../../assets/images/money.png')} />
            <Text style={{ color: '#5D0DE0', fontSize: 25, fontWeight: 'bold' }}>Realizações</Text>
          </ViewWrapper>
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#5D0DE0', fontSize: 20, fontWeight: 'bold' }}>Carro</Text>
            <Text style={{ fontSize: 18, color: '#555' }}>R$ 20.000</Text>
          </View>
          <Text style={{ marginTop: 10, fontSize: 22, color: '#555' }}>Tempo extimado para realização: 3 anos</Text>
        </View>
        <View style={{ width: '100%', justifyContent:'center', alignItems: 'center', marginTop: 50 }}>
          <Image style={{ width: 120, height: 120 }} source={require('../../assets/images/percentage.png')} />
        </View>

        <Text style={{ color: '#5D0DE0', fontSize: 24, fontWeight: 'bold', marginTop: 50 }}>Como alcançar</Text>
        <Text style={{ marginTop: 10, fontSize: 20, color: '#555' }}>Você pode juntar R$ 855,00/mês. Para isso, você pode reduzir em até 75% seu consumo em delivery</Text>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
    color: '#5D0DE0'
  },
});
