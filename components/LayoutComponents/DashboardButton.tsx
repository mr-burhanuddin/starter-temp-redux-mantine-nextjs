'use client';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

function DashboardButton() {
const router = useRouter();

  return (
    <Button onClick={() => router.push('/dashboard')}>Dashboard</Button>
  );
}

export default DashboardButton;
