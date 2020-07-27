import React from "react";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Info,
  Avatar,
  Name,
  Money,
  MoneyInfo,
  AvatarCard,
  Plan,
  TextCard,
  GoalsButton,
  GoalsText,
} from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeCard: React.FC = () => {
  const navigate = useNavigation()
  return (
    <Container>
      <Info>
        <AvatarCard>
          <Avatar
            source={{
              uri:
                "https://tecnoblog.net/meiobit/wp-content/uploads/2020/01/20200131avatar_1-680x382.jpg",
            }}
          />
        </AvatarCard>
        <TextCard>
          <Name style={{ marginTop: 20 }}>Matheus Figueirêdo</Name>
          <Plan>Meu Plano</Plan>
          <MaterialCommunityIcons
            name="crown"
            size={22}
            style={{ top: -46, left: 170 }}
            color="gold"
          />
        </TextCard>
      </Info>
      <MoneyInfo>
        <Name>Saldo total</Name>
        <Money>R$ 102.000,34</Money>
      </MoneyInfo>
      <GoalsButton activeOpacity={0.7}>
        <GoalsText onPress={() => navigate.navigate('Profile')}>Minhas metas</GoalsText>
      </GoalsButton>
    </Container>
  );
};

export default HomeCard;
