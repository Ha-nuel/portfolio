import Header from './components/UI/Header';
import About from './pages/About';
import Footer from './components/UI/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
