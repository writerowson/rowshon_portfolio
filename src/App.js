
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Banner from './HomePage/Banner';
import Projects from './HomePage/Projects/Projects';



function App() {
  return (
    <div className='bg-primary'>
      <Header></Header>
      <Banner />
      <Projects />
      <Footer></Footer>
    </div>
  );
}

export default App;
