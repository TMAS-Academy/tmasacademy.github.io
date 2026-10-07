import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Mission from './sections/Mission';
import WhatWeOffer from './sections/WhatWeOffer';
import FeaturedBooks from './sections/FeaturedBooks';
import CommunityCTA from './sections/CommunityCTA';

function App() {
  return (
    <>
      <Navbar title="TMAS Academy" />

      <main>
        <Hero />
        <Mission />
        <WhatWeOffer />
        <FeaturedBooks />
        <CommunityCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;