import styled from 'styled-components/native';

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
  padding-top: 80px;
  background-color: #F2F6F9;
  position: relative;
`;

export const Image = styled.Image`
  width: 150px;
  margin-bottom: 20px;
  padding: 5px;
`;

export const ButtonStyle = styled.Button<IButton>`
  width: 60px;
  height: 50px;
  padding: 5px;
  color: #fff;
  background-color: #5D0DE0;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px 0 14px;
  margin-top: 10px;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 18px;
  color: #5D0DE0;
  margin-left: 16px;
`;