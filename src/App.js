import './App.css';
import React, { useState, useEffect } from "react";
import {Routes,Route} from 'react-router-dom'
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import Sidebar from './Components/Sidebar/Sidebar';
import Sidebar2 from './Components/Sidebar/Sidebar2';
import Works from './Components/Works/Works';
import Webdev from './Components/Workpages/Webdev';
import UIUX from './Components/Workpages/UIUX';
import Games from './Components/Workpages/Games';
import Contact from './Components/Contact/Contact';
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';

function App() {
  //Preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an API
    setTimeout(() => {
      setIsLoading(false);
    }, 2900);
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className='flex h-screen'>
        <img
          className='m-auto md:w-[350px] md:h-[350px] w-[200px] h-[200px]'
          src="/images/loader.gif"
          alt="Loading..."
        />
        </div>
      )}
      {!isLoading && 
      <>
      <Routes>
        <Route 
          path='/' 
          element={
          <>
          <Sidebar/>
          <MobileNavbar/>
          <Hero/>
          <Info/>
          <Works/>
          <Contact/>
          </>
        }
        />
        <Route 
          path='/Webdev' 
          element={
          <>
            <Sidebar2/>
            <Webdev/>
          </>
        }
        />
        <Route 
          path='/UIUX' 
          element={
          <>
            <Sidebar2/>
            <UIUX/>
          </>
        }
        />
        <Route 
          path='/Games' 
          element={
          <>
            <Sidebar2/>
            <Games/>
          </>
        }
        />
      </Routes>
      </>
      }
     
    </div>
  );
}

export default App;
