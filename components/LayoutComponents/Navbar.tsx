'use client';

import {
  AppShell,
  Button,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';

function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleTheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppShell.Navbar p="xs">
      <Button onClick={toggleTheme} color="teal" size="compact-sm">
        {computedColorScheme === 'dark' ? (
          <HiSun fontSize={rem('24px')} cursor="pointer" color="inherent" />
        ) : (
          <HiMoon fontSize={rem('20px')} cursor="pointer" color="inherent" />
        )}
      </Button>
    </AppShell.Navbar>
  );
}

export default Navbar;
