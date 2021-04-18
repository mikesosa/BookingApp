import React from 'react';
import { Image } from 'react-native';
import styles from './Logo.style';

export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return (
    <Image resizeMode="cover" source={require('../../../assets/logo.png')} style={styles.logo} />
  );
}
