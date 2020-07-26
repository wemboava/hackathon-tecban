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

const EntypoIcon: React.FC<IconProps> = ({ name, size }) => {
  return <StyledIcon name={name} size={size} color="white" />;
};

export default function FinanceLayout() {
  return (
    <Container>
    </Container>
  );
}
