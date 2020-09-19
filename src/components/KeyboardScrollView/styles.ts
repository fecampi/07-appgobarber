import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

interface ContainerProps {
  padding: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  /*para ajustar em caso de usar o teclado*/
  ${props =>
    css`
      padding: 0 30px ${Platform.OS === 'android' ? props.padding : 40}px;
    `}
`;
