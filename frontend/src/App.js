import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Listings from './Pages/Listings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listings" element={<Listings />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
