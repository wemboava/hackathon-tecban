import styled from "styled-components/native";

export const Container = styled.ScrollView``;

export const Card = styled.View`
  padding: 10px 20px;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  background: #fff;
`;

export const Date = styled.Text`
  color: gray;
  font-size: 15px;
  font-family: Inter_700Bold;
`;

export const Title = styled.Text`
  font-size: 16px;
  width: 60%;
  margin-left: 10px;
`;

interface ColorProps {
  color: string;
}

export const Color = styled.View<ColorProps>`
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
  border-radius: 10px;
`;

export const Info = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const PriceContainer = styled.View`
  align-items: center;
  width: 20%;
  align-items: center;
  justify-content: center;
`;

interface PriceProps {
  isGood: boolean;
}

export const Price = styled.Text<PriceProps>`
  margin-left: auto;
  font-family: ${(props) =>
    props.isGood ? "Inter_700Bold" : "Inter_500Medium"};
  color: ${(props) => (props.isGood ? "#27AE60" : "gray")};
`;
