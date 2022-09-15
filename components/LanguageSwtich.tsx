import React, { useState, useContext } from 'react';
import { Box, Button, IconButton, createIcon } from '@chakra-ui/react';
import { LanguageContext } from '../context/LanguageContext';
import TurkishIcon from './icons/TurkishIcon';
import EnglishIcon from './icons/EnglishIcon';

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleToggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <IconButton
      aria-label='Select Language'
      onClick={handleToggleLanguage}
      borderRadius='50%'
      icon={language === 'tr' ? <TurkishIcon /> : <EnglishIcon />}
      backgroundColor='transparent'
    />
  );
};

export default LanguageSwitch;
