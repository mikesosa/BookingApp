import React from 'react';
import { FooterTabs } from '../../../components/organisms';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

export interface IHomeScreenProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen(props: IHomeScreenProps) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Inicio</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>Haz click en el boton firmar</Text>
      </Content>
      <FooterTabs activeTab="profile" />
    </Container>
  );
}
