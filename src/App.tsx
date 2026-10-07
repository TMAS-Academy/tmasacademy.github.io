import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Mission from './sections/Mission';
import FeaturedBooks from './sections/FeaturedBooks';
import CommunityCTA from './sections/CommunityCTA';

function App() {
  return (
    <>
      <Navbar title="TMAS Academy" />

      <main>
        <Hero />
        <Mission />
        <FeaturedBooks />
        <CommunityCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;