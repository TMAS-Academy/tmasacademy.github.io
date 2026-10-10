import Hero from '../sections/Hero';
import Mission from '../sections/Mission';
import Collections from '../sections/Collections';
import FeaturedBooks from '../sections/FeaturedBooks';
import CommunityCta from '../sections/CommunityCta';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <Mission />
      <Collections />
      <FeaturedBooks />
      <CommunityCta />
    </>
  );
}
