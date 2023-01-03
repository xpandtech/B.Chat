import React from 'react'
import Navbar from '../components/Navbar';
import {BrowserRouter as Router,Routes} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Navbar/>
      </Routes>
    </Router>

    </>
  )
         
};


export default App;