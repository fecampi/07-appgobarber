/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { Image, View, TextInput, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import getValidationErrors from '../../utils/getValidationErrors';
// --------Components-------
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Container from '../../components/KeyboardScrollView'; // --------Styles--------
import { Title } from './styles';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const emailInputRef = useRef<TextInput>(null);
  const passInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        Alert.alert('Cadastro realizado', 'Você já pode realizar o login');
        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao cadastrar, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <Container padding={151}>
        <Image source={logoImg} />
        <View>
          <Title>Crie sua conta</Title>
        </View>

        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input
            autoCapitalize="words"
            name="name"
            icon="user"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
          />
          <Input
            ref={emailInputRef}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passInputRef.current?.focus();
            }}
          />
          <Input
            ref={passInputRef}
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Senha"
            textContentType="newPassword"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Criar Conta
          </Button>
        </Form>
      </Container>

      <Link to="SignIn" icon="arrow-left" color="#fff">
        Criar uma conta
      </Link>
    </>
  );
};

export default SignUp;
