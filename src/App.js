import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";


import './assets/css/App.css';
import './assets/css/Font.css';
import './assets/css/Layout.css';
import './assets/css/ckeditor.css';
import './assets/css/timeline.css';
import Header from './components/Header';
import Home from './Home.js';
import Showcase from './Showcase';
import Skills from './Skills';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Showcase' element={<Showcase />}></Route>
        <Route path='/write-code-with' element={<Skills />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
