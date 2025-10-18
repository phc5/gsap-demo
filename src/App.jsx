import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProductViewer from './components/ProductViewer';
import Showcase from './components/Showcase';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
}
