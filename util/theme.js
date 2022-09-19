import { extendTheme } from '@chakra-ui/react';
import useTheme from '../hooks/useTheme';
const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: 'system',
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles: {
    global: {
      primary: {},
      // styles for the `body`
      body: {},
      // styles for the `a`
      a: {
        //color: 'teal.500',
        _hover: {
          textDecoration: 'none',
        },
        _click: {
          border: 'none',
        },
      },
    },
  },
  components: {
    Link: {},
  },
});

export default theme;
