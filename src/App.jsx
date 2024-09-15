import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import About from './components/About/About';
import Home from './components/Home/Home';
import FAQ from './components/Faq/FAQ';
import TranslateQuery from './components/Translate/TranslateQuery';
import ProductList from './components/Chat/ProductList';
import Orange from './components/Fruits/Orange';
import Mango from './components/Fruits/Mango';
import Apple from './components/Fruits/Apple';
import Banana from './components/Fruits/Banana';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/translate" element={isAuthenticated ? <TranslateQuery /> : <Navigate to="/" />} />
        <Route path="/chat" element={isAuthenticated ? <ProductList /> : <Navigate to="/" />} />
        <Route path="/fruit/Orange" element={isAuthenticated ? <Orange /> : <Navigate to="/" />} />
        <Route path="/fruit/Mango" element={isAuthenticated ? <Mango /> : <Navigate to="/" />} />
        <Route path="/fruit/Apple" element={isAuthenticated ? <Apple /> : <Navigate to="/" />} />
        <Route path="/fruit/Banana" element={isAuthenticated ? <Banana /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
