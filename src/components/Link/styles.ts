import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #312e38;
  /* as propriedades do border no reactNative não podem ser colocadas de uma vez*/
  border-top-width: 1px;
  border-color: #232129;
  /* Sempre que colocar algo colado em baixo inserir o getBottomSpace, para dar espaçameno no ios */
  padding: 16px 0 ${16 + getBottomSpace()}px;
  /* flex-direction: row no direct é default */
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
interface TextProps {
  color: string;
}

export const Text = styled.Text<TextProps>`
  font-size: 18px;
  font-family: 'RobotoSlab-regular';
  margin-left: 16px;
  ${props =>
    css`
      color: ${props.color};
    `}
`;
