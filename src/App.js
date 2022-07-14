import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,  Routes, Route, Link} from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/detail' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  
      </Router>
      </div>
  );
}

export default App;
