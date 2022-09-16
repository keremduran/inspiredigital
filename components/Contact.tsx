import useContent from '../hooks/useContent';
import H2 from './headings/H2';
import ContactForm from './forms/ContactForm';
import ContactWrapper from './wrappers/ContactWrapper';
import ContactArticleWrapper from './wrappers/ContactArticleWrapper';
import ContactSocialMedia from './social-media/ContactSocialMedia';

export default function ContactFormWithSocialButtons() {
  const content = useContent('contact');

  return (
    <ContactWrapper>
      <H2>{content.heading}</H2>
      <ContactArticleWrapper>
        <ContactSocialMedia socialMedia={content.socialMedia} />
        <ContactForm form={content.form} />
      </ContactArticleWrapper>
    </ContactWrapper>
  );
}
