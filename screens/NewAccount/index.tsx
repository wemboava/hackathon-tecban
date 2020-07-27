import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';
import Button from '../../components/Button';

import {
  InputWrapper,
  Container,
  Title,
  ButtonWrapper,
} from './styles';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ height: 90, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#5D0DE0', paddingTop: 40, paddingLeft: 20, paddingRight: 50 }}>
        <ButtonWrapper onPress={() => navigation.navigate('Accounts')}>
          <Image style={{ width: 20, height: 23, marginRight: 15, marginTop: 5 }} source={require('../../assets/images/arrow.png')} />
        </ButtonWrapper>
        <Title>Adicionar</Title>
        <View />
      </View>
      <Container>
        {/* <Text style={styles.title}>Nova Conta</Text> */}
        <InputWrapper placeholder="CPF" />
        <InputWrapper placeholder="Agência" />
        <InputWrapper placeholder="Conta corrente" />
        <Button
          onPress={() => {}}
          primary
        >Adicionar</Button>
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
