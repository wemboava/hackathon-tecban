import styled from 'styled-components/native';

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
  height: 400px;
  background-color: #5D0DE0;
  padding: 60px;
`;

export const Card = styled.Image`
  width: 250px;
  height: 320px;
`;

export const ChartCard = styled.Image`
  flex: 1;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 20px 20px 80px 20px;
  padding: 5px 20px;
  border-radius: 30px;
  border-color: #5D0DE0;
  border-width: 1px;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 18px;
  color: #5D0DE0;
`;