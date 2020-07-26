import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import ProfileCard from "../../ProfileLayout/ProfileCard/ProfileCard";

export const Container = styled.View`
  padding: 20px;
  background-color: #F2F6F9;
`;

export const Title = styled.Text`
  color: gray;
  font-size: 20px;
  font-family: Inter_700Bold;
`;
export const Header = styled.View`
  flex-direction: row;
`;

export const Card = styled.View`
  width: 100%;
  margin-top: 20px;
  border-radius: 15px;
  flex-direction: row;
  padding: 10px 0;
`;

export const Name = styled.Text`
  color: #444;
  font-size: 20px;
  font-family: Inter_700Bold;
`;

export const Icon = styled(Ionicons)`
  margin-left: auto;
  margin-top: 5px;
  color: gray;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const Separator = styled.View`
  height: 2px;
  color: #f5f5f5;
  width: 100%;
  margin-top: 20px;
  align-self: center;
  background: #dedede;
`;

export const Price = styled.Text`
  margin-left: auto;
  align-self: center;
  color: #999;
  font-size: 18px;
  font-family: Inter_500Medium;
`;

export const Subtitle = styled.Text`
  color: #bdbdbd;
  font-size: 12px;
`;

export const Info = styled.View`
  margin-left: 20px;
`;
