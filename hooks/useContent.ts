import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { dictionary } from '../content/dictionary';

export default function useContent(section: string) {
  const { language } = useContext(LanguageContext);
  const content = dictionary[language];
  return content[section];
}
