import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery'
import About from './components/About';

function App() {
  const [categories] = useState([
    {
      name:'site',
      description: 'ABCDEFG'
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <Router>
          <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
        <About></About>
        <Gallery currentCategory={currentCategory}></Gallery>
        <ContactForm></ContactForm>
      </main>
  </div>
    </Router>
  );
}

export default App;
