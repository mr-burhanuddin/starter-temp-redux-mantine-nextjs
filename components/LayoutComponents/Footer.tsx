import { AppShell, Flex, Text } from '@mantine/core';
import React from 'react';

interface FooterProps {
  opened: boolean;
}

function Footer({ opened }: FooterProps) {
  return (
    <AppShell.Footer zIndex={opened ? 'auto' : 201}>
      <Flex justify="center" align="center">
        <Text fw={500}>Samta Info Tech ©️ {new Date().getFullYear()}</Text>
      </Flex>
    </AppShell.Footer>
  );
}

export default Footer;
