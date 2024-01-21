'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import Footer from '@/components/LayoutComponents/Footer';
import Header from '@/components/LayoutComponents/Header';
import MainContainer from '@/components/LayoutComponents/MainContainer';
import Navbar from '@/components/LayoutComponents/Navbar';

function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar />
      <MainContainer />
      <Footer opened={opened} />
    </AppShell>
  );
}

export default Dashboard;
