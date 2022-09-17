import React, { useContext } from 'react';
import { IconButton } from '@chakra-ui/react';
import { LanguageContext } from '../../context/LanguageContext';
import TurkishIcon from '../graphics/TurkishIcon';
import EnglishIcon from '../graphics/EnglishIcon';

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
      _hover={{ background: 'orange.200' }}
      _focus={{ background: 'orange.100' }}
    />
  );
};

export default LanguageSwitch;
