import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Card = styled.View`
  width: 100%;
  min-height: 200px;
  flex: 1;
  background-color: #222;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-family: Cabin_500Medium;
`;

export const Money = styled.Text`
  color: white;
  font-size: 35px;
  font-family: Inter_700Bold;
`;

export const MoneyInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledIcon = styled(Entypo)`
  margin-left: auto;
  margin-right: 30px;
`;

export const SeeMore = styled.View`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #ccc;
  font-family: Cabin_400Regular;
`;
