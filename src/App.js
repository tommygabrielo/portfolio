import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projet from './components/Projet';
import Skills from './components/Skills';

function App() {
  return (
    <div className='bg-black'>
      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <Experience />
      <Projet />
      <Footer />
    </div>
  );
}

export default App;
