import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

export interface IHomeScreenProps {}

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
      <Footer>
        <FooterTab>
          <Button danger block>
            <Text>Firmar</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
