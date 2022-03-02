import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import ColorModeSwitch from '../components/ColorModeSwtich';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'orange.100',
        bgImage: 'stacked-waves-haikei.svg',
        bgSize: '100vw',
      },
      // styles for the `a`
      a: {
        //color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
