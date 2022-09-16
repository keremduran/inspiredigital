import useContent from '../hooks/useContent';
import HeroWrapper from './wrappers/HeroWrapper';
import H1 from './headings/H1';
import LinkButton from './buttons/LinkButton';
import HeroLinkButtonsWrapper from './wrappers/HeroLinkButtonsWrapper';
import HeroStyledText from './text/HeroStyledText';
import HeroIllustrationFullWidth from './graphics/HeroIllustrationFullWidth';

export default function Hero() {
  const content = useContent('hero');
  return (
    <HeroWrapper>
      <H1 data={content.heading} />
      <HeroStyledText text={content.description} />
      <HeroLinkButtonsWrapper>
        <LinkButton content={content.projectsButton} variant={'secondary'} />
        <LinkButton content={content.contactButton} variant={'primary'} />
      </HeroLinkButtonsWrapper>
      <HeroIllustrationFullWidth />
    </HeroWrapper>
  );
}
