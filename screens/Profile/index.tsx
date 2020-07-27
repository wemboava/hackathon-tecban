import React from "react";

import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, CardsContainer, Title, Goal, Period, ButtonWrapper } from './styles';

export default function Accounts() {
  const navigation = useNavigation();
  return <Container>
    <CardsContainer>
    <View style={{ justifyContent:'center', alignItems: 'center', }}>
      <Title>Metas</Title>
    </View>
      <View style={{ flex: 1 }}>
        <Goal>
          <Period><Text style={{ color: '#000', fontSize: 20 }}>Curto prazo</Text></Period>
          <View style={{ width: '100%', marginTop: 20 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Em um mês:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={{ color: '#fff' }}>Curso de PWA</Text>
              <Text style={{ color: '#fff' }}>R$ 349,90</Text>
            </View>
          </View>
        </Goal>
        <Goal>
          <Period><Text style={{ color: '#000', fontSize: 20 }}>Médio prazo</Text></Period>
          <View style={{ width: '100%', marginTop: 20 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Em três meses:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={{ color: '#fff' }}>Iphone 11</Text>
              <Text style={{ color: '#fff' }}>R$ 5.900,00</Text>
            </View>
          </View>
        </Goal>
        <Goal>
          <Period><Text style={{ color: '#000', fontSize: 20 }}>Longo prazo</Text></Period>
          <View style={{ width: '100%', marginTop: 20 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Em dois anos:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={{ color: '#fff' }}>Carro</Text>
              <Text style={{ color: '#fff' }}>R$ 18.000,00</Text>
            </View>
          </View>
        </Goal>
      </View>
      <View style={{ justifyContent:'center', alignItems: 'center', marginTop: 10 }}>
        <Image source={require('../../assets/images/add-button.png')} />
      </View>
    </CardsContainer>
    <View style={{ width: '100%', justifyContent:'center', alignItems: 'center', marginTop: 10 }}>
      <ButtonWrapper onPress={() => navigation.navigate('Goals')}>
        <Image style={{ width: 27, height: 30, marginRight: 15 }} source={require('../../assets/images/money.png')} />
        <Text style={{ color: '#5D0DE0', fontSize: 20 }}>Realizações</Text>
      </ButtonWrapper>
    </View>
  </Container>;
}
