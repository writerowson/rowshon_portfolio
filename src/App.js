
import './App.css';
import Footer from './Footer';
import Header from './Header';
import About from './HomePage/About';
import Banner from './HomePage/Banner';
import Projects from './HomePage/Projects/Projects';



function App() {
  return (
    <div className='bg-primary'>
      <Header></Header>

      <Banner />
      <About></About>
      <Projects />

      <Footer></Footer>
    </div>
  );
}

export default App;
