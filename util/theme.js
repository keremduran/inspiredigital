import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Roboto, sans-serif',
  },
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
