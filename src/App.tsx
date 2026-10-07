import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar title="TMAS Academy" />

      <main>
        <h1>Free STEM Education for Everyone</h1>
        <p>
          High-quality STEM resources made freely accessible to everyone.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default App;