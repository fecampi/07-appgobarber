/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { Image, View, TextInput, Alert } from 'react-native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import logoImg from '../../assets/logo.png';
import getValidationErrors from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/auth';
// --------Components-------
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Container from '../../components/KeyboardScrollView';

// --------Styles--------
import { Title, ForgotPassword, ForgotPasswordText } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  // Autenticação
  const { signIn } = useAuth();

  // Ref é para manipular o elemento de forma direta, diferente de um evento(clicar e submeter o form)
  const formRef = useRef<FormHandles>(null);
  // È utilizado para mudar o foco para o outro campo
  const passwordInputRef = useRef<TextInput>(null);
  // Formulário
  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        // Disparar o toast
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais',
        );
      }
    },
    // toda variável externa, precisa colocar na dependência[Hooks utilizados]
    [signIn],
  );
  return (
    <>
      <Container padding={151}>
        <Image source={logoImg} />
        <View>
          <Title>Faça seu logon</Title>
        </View>
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            // botão do teclado->Proximo
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />
          <Input
            ref={passwordInputRef}
            name="password"
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            // Ultimo---botão do teclado->Enviar
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
            Entrar
          </Button>
        </Form>
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
