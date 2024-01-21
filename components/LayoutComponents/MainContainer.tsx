import { AppShell, Button, Flex, Title, rem } from '@mantine/core';
import React from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { decrement, increment } from '@/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '@/slices/reduxHooks';

function MainContainer() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const increamentNum = () => dispatch(increment());
  const decrementNum = () => dispatch(decrement());
  return (
    <AppShell.Main>
      <Flex justify="center" align="center" direction="column" gap="md">
        <Title order={1}>{count}</Title>
        <Flex justify="center" align="center" direction="row" gap="md">
          <Button onClick={decrementNum} size="compact-xl">
            <HiMinus fontSize={rem('24px')} cursor="pointer" color="inherent" />
          </Button>
          <Button onClick={increamentNum} size="compact-xl">
            <HiPlus fontSize={rem('24px')} cursor="pointer" color="inherent" />
          </Button>
        </Flex>
      </Flex>
    </AppShell.Main>
  );
}

export default MainContainer;
