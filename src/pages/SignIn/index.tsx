import React from 'react';
import { Image } from 'react-native';
import logoImg from '../../assets/logo.png';
// --------Components-------
import Input from '../../components/Input';
import Button from '../../components/Button';
// --------Styles--------
import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input />
      <Input />
      <Button
        onPress={() => {
          console.log('Click');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
