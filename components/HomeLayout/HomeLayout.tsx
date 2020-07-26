import React from "react";

import { Container, Background } from "./styles";
import HomeCard from "./HomeCard/HomeCard";
import { ScrollView, Text } from "react-native";
import Outgoing from "./Outgoing/Outgoing";

const HomeLayout: React.FC = () => {
  return (
    <Background>
      <Container>
        <HomeCard />
      </Container>
      <Outgoing />
    </Background>
  );
};

export default HomeLayout;
