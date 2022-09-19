import React, { useContext } from 'react';
import { IconButton, useTheme } from '@chakra-ui/react';
import { LanguageContext } from '../../context/LanguageContext';
import TurkishIcon from '../graphics/TurkishIcon';
import EnglishIcon from '../graphics/EnglishIcon';

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { baseColor } = useTheme();

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
      _hover={{ backgroundColor: `${baseColor}.200` }}
      _focus={{ backgroundColor: `${baseColor}.100` }}
    />
  );
};

export default LanguageSwitch;
