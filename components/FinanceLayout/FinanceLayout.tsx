import React from "react";

import {
  Container,
  Card,
  Title,
  Money,
  MoneyInfo,
  StyledIcon,
  SeeMore,
  SubTitle,
} from "./styles";

interface IconProps {
  name: string;
  size: number;
}

import { Ionicons } from '@expo/vector-icons'; 

const EntypoIcon: React.FC<IconProps> = ({ name, size }) => {
  return <StyledIcon name={name} size={size} color="white" />;
};

export default function FinanceLayout() {
  return (
    <Container>
      <Card>
        <Title>Gastos Fixos</Title>
        <SubTitle>Isso que eu achei de gastos fixos por mês.</SubTitle>
        <MoneyInfo>
          <Money>R$ 2000,36</Money>
          <EntypoIcon name={"eye"} size={35}></EntypoIcon>
        </MoneyInfo>
        <SeeMore>
        <Ionicons name="ios-arrow-down" size={30} color="white" />
        </SeeMore>
      </Card>
      <Card>
        <Title>Gastos fixos</Title>
      </Card>
      <Card>
        <Title>Economizado</Title>
      </Card>
    </Container>
  );
}
