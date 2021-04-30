import React from 'react';
import { Button, Container, Content, Form, Text } from 'native-base';
import { FormInput } from '../../../components/molecules';
import { Logo } from '../../../components/atoms';
import styles from './LoginScreen.style';
import { setUserToken } from '../../../store/slices/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';

export interface ILoginScreenProps {
  navigation: any;
}

export function LoginScreen({ navigation }: ILoginScreenProps) {
  const dispatch: AppDispatch = useDispatch();
  return (
    <Container>
      <Content padder style={styles.content}>
        <Logo />
        <Form>
          <FormInput label="Email" />
          <FormInput label="Contraseña" last={true} secureTextEntry={true} />
        </Form>
        <Button danger block style={styles.button} onPress={() => dispatch(setUserToken('yes'))}>
          <Text>Iniciar sesión</Text>
        </Button>

        <Button
          bordered
          block
          danger
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text>Registrarme</Text>
        </Button>
      </Content>
    </Container>
  );
}
