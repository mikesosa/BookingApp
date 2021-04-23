import React from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content } from 'native-base';
export interface IMainLayoutProps {
  children: any;
  headerTitle: string;
  showHeader?: boolean;
}

export function MainLayout({ children, headerTitle, showHeader }: IMainLayoutProps) {
  return (
    <Container>
      {showHeader && (
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{headerTitle}</Title>
          </Body>
          <Right />
        </Header>
      )}
      <Content>{children}</Content>
      {/* <FooterTabs activeTab={activeFooterTab} /> */}
    </Container>
  );
}
