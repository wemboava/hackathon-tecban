import React from "react";

import {
  Container,
  Background,
  Title,
  Total,
  Money,
  GraphContainer,
} from "./styles";
import Graph from "../Graph";
import History from "../History/History";

export default function FinanceLayout() {
  return (
    <Background>
      <Container>
        <Title>Histórico</Title>
        <GraphContainer>
          <Graph />
          <Total>Total</Total>
          <Money>R$ 12.000,34</Money>
        </GraphContainer>
      </Container>
      <History />
    </Background>
  );
}
