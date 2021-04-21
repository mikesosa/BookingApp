import React from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import styles from './FooterTabs.style';

export interface IFooterTabsProps {
  activeTab: string;
}

export function FooterTabs({ activeTab }: IFooterTabsProps) {
  return (
    <Footer>
      <FooterTab>
        <Button vertical active={activeTab === 'agenda'}>
          <Icon type="FontAwesome" name="calendar-o" />
          <Text>Agenda</Text>
        </Button>
        <Button vertical active={activeTab === 'school'}>
          <Icon type="FontAwesome" name="graduation-cap" />
          <Text>Escuela</Text>
        </Button>
        <Button vertical active={activeTab === 'notifications'}>
          <Icon active name="md-notifications" />
          <Text style={styles.smallLabel}>Notificaciones</Text>
        </Button>
        <Button vertical active={activeTab === 'profile'}>
          <Icon name="person" />
          <Text>Perfil</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
