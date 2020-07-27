import React from "react";

import { Container, Background } from "./styles";
import HomeCard from "./HomeCard/HomeCard";
import { View } from "react-native";
import Outgoing from "./Outgoing/Outgoing";

const HomeLayout: React.FC = () => {
  return (
    <View style={{ backgroundColor: '#F2F6F9' }}>
      <Background>
        <Container>
          <HomeCard />
        </Container>
        <Outgoing />
      </Background>
    </View>
  );
};

export default HomeLayout;
