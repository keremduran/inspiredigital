import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { dictionary } from '../content/dictionary';

export default function useContent(section: string) {
  const { language } = useContext(LanguageContext);
  console.log(language);
  const content = dictionary[language];
  console.log('content:', content);
  console.log('section: ', section);
  console.log('content[section]: ', content[section]);
  return content[section];
}
