import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// Entre parentes, pois veio de fora do React-Native
export const Container = styled(RectButton)`
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;
  /* display: flex (Não precisa, pois todos são por padrão) */
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
`;
