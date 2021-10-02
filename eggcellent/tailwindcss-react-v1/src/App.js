import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Home from './pages';
import {Switch, Route} from 'react-router-dom';
import About from './pages/about';
import Dropdown from './components/dropdown';
import React, {useState, useEffect} from 'react';
import Menu from './pages/menu';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('works xd')
      }
    }
    window.addEventListener('resize',hideMenu)

    return () => {
      window.removeEventListener('resize',hideMenu)
    };
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/menu' exact component={Menu}/>
        <Route path='/About' exact component={About}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
