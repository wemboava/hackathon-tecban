import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: #F2F6F9;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardsContainer = styled.View`
  width: 100%;
  height: 600px;
  background-color: #5D0DE0;
  padding: 20px;
`;

export const Goal = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #5D0DE0;
  align-items: center;
  border-bottom-color: #c4c4c4;
  border-bottom-width: 1px;
`;

export const Period = styled.View`
  width: 180px;
  height: 40px;
  border-radius: 30px;
  background-color: #fff;
  padding: 0 25px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 40px 0 10px 0;
  font-size: 20px;
  color: white;
  font-family: Inter_500Medium;
`;

export const ButtonWrapper = styled(RectButton)`
  width: 60%;
  height: 50px;
  border-width: 2px;
  border-color: #5D0DE0;
  border-radius: 25px;
  margin: 10px 0;

  flex-direction: row;

  justify-content: center;
  align-items: center;
`;