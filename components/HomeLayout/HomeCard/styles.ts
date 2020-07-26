import styled from "styled-components/native";
import { mainColor } from "../../../constants/Colors";

export const Card = styled.View``;

export const Container = styled.View`
  margin: 20px;
  height: 270px;
  margin-top: 60px;
  background-color: white;
  border-radius: 15px;
`;

export const Plan = styled.Text`
  color: ${mainColor};
  font-family: Cabin_700Bold;
`;

export const AvatarCard = styled.View``;
export const TextCard = styled.View``;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
`;
export const Avatar = styled.Image`
  width: 80px;
  height: 100px;
  top: -20px;
  right: 20px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-family: Cabin_500Medium;
  color: gray;
`;

export const Money = styled.Text`
  font-size: 30px;
  font-family: Inter_700Bold;
  color: ${mainColor};
`;

export const MoneyInfo = styled.View`
  flex-direction: column;
  padding-left: 20px;
`;

export const GoalsButton = styled.TouchableOpacity`
  width: 80%;
  margin-top: 30px;
  align-self: center;
  height: 45px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`;

export const GoalsText = styled.Text`
  font-family: Inter_700Bold;
  text-transform: uppercase;
  color: ${mainColor};
`;
