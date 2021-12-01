import './App.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import { Result } from './components/Result'
import Testimonials from './components/Testimonials'
import About from './pages/about'
import { QuizQuestion } from './components/QuizQuestion';
import React from 'react';
import {ResultProvider} from './components/ResultContext';


function App() {
  return (
    <ResultProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/quiz" exact element={<QuizQuestion/>} />
          <Route path="/testimonials" exact element={<Testimonials/>} />
          <Route path="/result" exact element={<Result/>} />
        </Routes>
      </Router>
    </ResultProvider>
  );
}
// Stopped at 24:16 https://www.youtube.com/watch?v=VzWBLj_CfpE&
export default App;
