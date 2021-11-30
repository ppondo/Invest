import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import { QuizQuestion } from './components/QuizQuestion';
import Testimonials from './components/Testimonials';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/quiz" exact element={<QuizQuestion/>} />
      </Routes>
    </Router>
  
 
    
  );
}
// Stopped at 24:16 https://www.youtube.com/watch?v=VzWBLj_CfpE&
export default App;
