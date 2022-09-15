import useContent from '../hooks/useContent';
import React from 'react';

function Footer() {
  const content = useContent('footer');
  return (
    <footer className='text-center'>
      <a
        href='https://github.com/keremduran'
        target='_blank'
        rel='noopener noreferrer'
      >
        {content.copyright}
      </a>
    </footer>
  );
}

export default Footer;
