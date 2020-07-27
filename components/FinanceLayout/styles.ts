import styled from "styled-components/native";
import { mainColor } from "../../constants/Colors";

export const Background = styled.ScrollView`
  background: white;
`;

export const Title = styled.Text`
  margin: 40px 0 20px 0;
  font-size: 20px;
  color: white;
  font-family: Inter_500Medium;
`;

export const Total = styled.Text`
  position: absolute;
  top: 90px;
  color: lightgray;
  font-family: Inter_500Medium;
`;

export const Container = styled.View`
  padding: 20px;
  align-items: center;
  background-color: ${mainColor};
`;

export const Money = styled.Text`
  position: absolute;
  top: 110px;
  color: white;
  font-family: Inter_700Bold;
  font-size: 22px;
`;

export const GraphContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
