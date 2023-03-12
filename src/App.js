import './App.css';
import { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/UI/Header';
import About from './pages/About';
import Footer from './components/UI/Footer';

export const UserContext = createContext(null);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
