import * as React from 'react';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Button from '../../components/Button';

import {
  InputWrapper,
  Container,
  Image,
} from './styles';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F6F9' }}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
      <Text style={styles.title}>Nova Conta</Text>
      <InputWrapper placeholder="CPF" />
      <InputWrapper placeholder="Agência" />
      <InputWrapper placeholder="Conta corrente" />
      <Button
        onPress={() => {}}
        primary
      >Adicionar</Button>
    </Container>
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
