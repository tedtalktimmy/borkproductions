import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Photography from './components/Photography';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Photography />
      <Projects />
    </div>
  );
}

export default App;
