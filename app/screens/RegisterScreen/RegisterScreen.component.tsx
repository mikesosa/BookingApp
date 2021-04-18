import React, { useState } from 'react';
import { Button, Container, Content, Form, Text } from 'native-base';
import styles from './RegisterScreen.style';
import { FormInput } from '../../components/molecules';
import { Alert } from 'react-native';
import { Logo } from '../../components/atoms';

export interface IRegisterScreenProps {
  navigation: any;
}

export function RegisterScreen({ navigation }: IRegisterScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Content padder style={styles.content}>
        <Logo />
        <Form>
          <FormInput label="Email" onChangeText={(eml: string) => setEmail(eml)} />
          <FormInput
            label="Crear contraseña"
            last={true}
            secureTextEntry={true}
            onChangeText={(pwd: string) => setPassword(pwd)}
          />
          <FormInput
            label="Confirmar contraseña"
            last={true}
            secureTextEntry={true}
            onChangeText={(pwd: string) => setPassword(pwd)}
          />
        </Form>
        <Button
          danger
          disabled={!email || !password}
          style={styles.button}
          block
          onPress={() =>
            Alert.alert('Aviso', `Te enviamos un correo a ${email}`, [
              { text: 'OK', onPress: () => navigation.navigate('Home') },
            ])
          }
        >
          <Text>Crear cuenta</Text>
        </Button>

        <Button
          bordered
          style={styles.button}
          block
          danger
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Ya tengo una cuenta</Text>
        </Button>
      </Content>
    </Container>
  );
}
