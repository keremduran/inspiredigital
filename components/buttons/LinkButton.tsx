import React from 'react';
import { Button, Link } from '@chakra-ui/react';
type Props = { content: any; variant: string };

function LinkButton({ content, variant }: Props) {
  let color: string;
  switch (variant) {
    case 'secondary':
      color = 'teal';
      break;
    default:
      color = 'orange';
  }
  return (
    <Link href={content.href} _hover={{ textDecoration: 'none' }}>
      <Button
        rounded={'full'}
        colorScheme={color}
        textColor={'whiteAlpha.900'}
        bg={`${color}.500`}
        _hover={{ bg: `${color}.600` }}
        textTransform={'capitalize'}
        px={6}
        boxShadow={'xl'}
      >
        {content.label}
      </Button>
    </Link>
  );
}

export default LinkButton;
