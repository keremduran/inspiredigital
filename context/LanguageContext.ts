import React from 'react';

export const LanguageContext = React.createContext<{
  language: string;
  setLanguage: (newLanguage: string) => void;
}>({
  language: 'en',
  setLanguage: () => undefined,
});
