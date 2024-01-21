import { Flex, Text, Title } from '@mantine/core';
import DashboardButton from '@/components/LayoutComponents/DashboardButton';

export default function HomePage() {
  return (
    <Flex justify="center" align="center" direction="column" gap="xl" mah="100vh" h="100vh">
      <Title order={1}>
      <Text inherit variant="gradient" component="h1" gradient={{ from: 'blue', to: 'yellow' }}>Starter Template</Text>
      </Title>
      <DashboardButton />
    </Flex>
  );
}
