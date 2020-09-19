import React from 'react';
import { Image, View } from 'react-native';
import logoImg from '../../assets/logo.png';
// --------Components-------
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Container from '../../components/KeyboardScrollView';
// --------Styles--------
import { Title } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <Container padding={360}>
        <Image style={{ marginTop: 143 }} source={logoImg} />
        <View>
          <Title>Crie sua conta</Title>
        </View>
        <Input name="name" icon="user" placeholder="Nome" />
        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('Click');
          }}
        >
          Entrar
        </Button>
      </Container>
      <Link to="SignIn" icon="arrow-left" color="#fff">
        Voltar para logon
      </Link>
    </>
  );
};

export default SignUp;
