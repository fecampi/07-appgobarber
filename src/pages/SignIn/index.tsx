import React from 'react';
import { Image, View } from 'react-native';

import logoImg from '../../assets/logo.png';
// --------Components-------
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Container from '../../components/KeyboardScrollView';
// --------Styles--------
import { Title, ForgotPassword, ForgotPasswordText } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container padding={320}>
        <Image style={{ marginTop: 145 }} source={logoImg} />
        <View>
          <Title>Faça seu logon</Title>
        </View>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('Click');
          }}
        >
          Entrar
        </Button>
        <ForgotPassword
          onPress={() => {
            console.log('senha');
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>
      <Link to="SignUp" icon="log-in" color="#ff9000">
        Criar uma conta
      </Link>
    </>
  );
};

export default SignIn;
