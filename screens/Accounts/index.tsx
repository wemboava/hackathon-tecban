import React, { useState, useRef } from "react";
import { useNavigation, ScrollView } from '@react-navigation/native';

import Carousel from 'react-native-snap-carousel';

import Button from '../../components/Button';

import { View, Dimensions } from 'react-native';

import { Container, CardsContainer, Card, ChartCard, CreateAccountButton, CreateAccountButtonText, Title } from './styles';

export default function Accounts() {
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    '../../assets/images/card-1.png',
    '../../assets/images/card-2.png',
    '../../assets/images/card-3.png',
    '../../assets/images/card-4.png',
    '../../assets/images/card-5.png',
];

  const _renderItem = ({ item, index }: any) => {
    return (
      <Card source={require('app/assets/images/card-1.png')} />
    )
  }

  const { height, width } = Dimensions.get('window');

  return <>
    <Container>
      <CardsContainer>
      <View style={{ justifyContent:'center', alignItems: 'center', }}>
        <Title>Cartões</Title>
      </View>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
          <Carousel
            ref={carouselRef}
            data={images}
            sliderWidth={width}
            itemWidth={width}
            renderItem={_renderItem}
            inactiveSlideOpacity={0.6}
            inactiveSlideScale={0.9}
            firstItem={1}
            hasParallaxImages
            layout={'stack'}
          />
        </View>
      </CardsContainer>
      <ChartCard style={{ width, height: 230 }} resizeMode={'contain'} source={require('app/assets/images/chart-card.png')} />
      <CreateAccountButton onPress={() => navigation.navigate('NewAccount')}>
        <CreateAccountButtonText>
          Adicionar conta
        </CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  </>
}
