import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Footer from './Footer';
import Header from './Header';


// import Contact from './HomePage/Contact';
import Homa from './HomePage/Homa';
// import Projects from './HomePage/Projects/Projects';



function App() {
  return (
    <div className='bg-primary' >
      <Header></Header>


      <Routes>
        <Route path='/' element={<Homa></Homa>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

      </Routes>
      {/* <Projects />
      <Contact /> */}
      <Footer></Footer>
    </div >
  );
}

export default App;
