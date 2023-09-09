
import './App.css';
import About from './Components/About/About';
import Contract from './Components/Contact/Contract';
import Voting from './Components/voting/Voting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Voting />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contract/>} />
      </Routes>
      
    </BrowserRouter>
  );



}





export default App;
