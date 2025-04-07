import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projet from '@/components/Projet';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projet />
      <Footer />
    </div>
  );
}
