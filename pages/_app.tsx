import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import ColorModeSwitch from '../components/ColorModeSwtich';
import theme from '../util/theme.js';
import { LanguageContext } from '../context/LanguageContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState('en');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </LanguageContext.Provider>
  );
}

export default MyApp;
