'use client';

import { AppShell, Box, Burger, Flex, Text } from '@mantine/core';
import React from 'react';
import classes from './LayoutStyles.module.css';

interface HeaderProps {
  toggle: () => void;
  opened: boolean;
}
function Header({ toggle, opened }: HeaderProps) {
  return (
    <AppShell.Header>
      <Flex justify="space-between" align="center" direction="row" gap="sm">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Box>
          <Text className={classes.companylogo} tt="capitalize" size="lg" fw={700} p="sm">
            Samta Info Tech
          </Text>
        </Box>
      </Flex>
    </AppShell.Header>
  );
}

export default Header;
