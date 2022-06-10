
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Banner from './HomePage/Banner';


function App() {
  return (
    <div className='bg-primary'>
      <Header></Header>
      <Banner />
      <Footer></Footer>
    </div>
  );
}

export default App;
