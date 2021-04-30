import { Button, Text } from 'native-base';
import React from 'react';
import { useDispatch } from 'react-redux';
import { MainLayout } from '../../../components/templates';
import { setUserToken } from '../../../store/slices/auth';
import { AppDispatch } from '../../../store/store';

export function ProfileScreen() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <MainLayout headerTitle="Profile">
      <Text>Perfil</Text>
      <Button danger block onPress={() => dispatch(setUserToken(null))}>
        <Text>Cerrar sesión</Text>
      </Button>
    </MainLayout>
  );
}
