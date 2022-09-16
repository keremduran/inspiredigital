import { Text } from '@chakra-ui/react';

function HeroStyledText({ text }: { text: string }) {
  return (
    <Text color={'gray.500'} letterSpacing={1} fontWeight={700} maxW={'6xl'}>
      {text}
    </Text>
  );
}

export default HeroStyledText;
