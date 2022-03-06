import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import GlobalStyle from './globalStyles';
import About from './pages/About';
import Gmail from './pages/Gmail';
import Images from './pages/Images';
import Store from './pages/Store';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/store' element={<Store />} />
        <Route path='/gmail' element={<Gmail />} />
        <Route path='/images' element={<Images />} />
      </Routes>
    </>
  );
}

export default App;
