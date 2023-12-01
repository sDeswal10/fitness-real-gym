import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import JoinUs from './Components/JoinUs/JoinUs';
import Plans from './Components/Plans/Plans';
import Program from './Components/Programs/Programs';
import { Testimonials } from './Components/Testimonials/Testimonials';
import WhyUs from './Components/WhyUs/WhyUs';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <WhyUs/>
      <Plans/>
      <Testimonials/>  
      <JoinUs/>
      <Footer/>  
    </div>
  );
}

export default App;
