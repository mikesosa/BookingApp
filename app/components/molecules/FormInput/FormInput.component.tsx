import React from 'react';
import { Input, Item, Label } from 'native-base';
import styles from './FormInput.style';

export interface IFormInputProps {
  label: string;
  last?: boolean;
  // All other props
  [x: string]: any;
}

export function FormInput(props: IFormInputProps) {
  const { label, last, ...rest } = props;
  return (
    <Item floatingLabel last={last}>
      <Label style={styles.label}>{label}</Label>
      <Input {...rest} />
    </Item>
  );
}
