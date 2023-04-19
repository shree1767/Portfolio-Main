import './App.css';
import React, { useState, useEffect } from "react";

import Info from './Components/Info/Info';
import Sidebar from './Components/Sidebar/Sidebar';
import Works from './Components/Works/Works';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an API
    setTimeout(() => {
      setIsLoading(false);
    }, 2900);
  }, []);
  return (
    <div className="App">
      {/* preloader */}
      {isLoading && (
        <div className='items-center justify-center my-[20vh]'>
        <img
          className='mx-auto md:w-[350px] md:h-[350px] w-[200px] h-[200px]'
          src="/images/loader.gif"
          alt="Loading..."
          // style={{ width: "350px", height: "350px" }}
        />
        </div>
      )}
      {!isLoading && 
      <>
      <Sidebar/>
      <Info/>
      <Works/>
      </>
      }
     
    </div>
  );
}

export default App;
