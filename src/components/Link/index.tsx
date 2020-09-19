import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { RectButtonProperties } from 'react-native-gesture-handler';

// --------Styles--------
import { Container, Text } from './styles';

interface ButtonProps extends RectButtonProperties {
  to: string;
  icon: string;
  color: string;
}

const SignIn: React.FC<ButtonProps> = ({ to, icon, color, children }) => {
  const navigation = useNavigation();
  return (
    <Container
      onPress={() => {
        navigation.navigate(to);
      }}
    >
      <Icon name={icon} size={20} color={color} />
      <Text color={color}>{children}</Text>
    </Container>
  );
};

export default SignIn;
