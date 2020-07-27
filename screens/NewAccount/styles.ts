import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface IButton {
  primary: boolean;
};

export const InputWrapper = styled.TextInput`
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #5D0DE0;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 30px;
  padding-top: 180px;
  background-color: #F2F6F9;
  position: relative;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export const ButtonStyle = styled.Button<IButton>`
  width: 60px;
  height: 50px;
  padding: 5px;
  color: #fff;
  background-color: #5D0DE0;
`;

export const ButtonWrapper = styled(RectButton)`
  width: 30px;
  height: 30px;
`;