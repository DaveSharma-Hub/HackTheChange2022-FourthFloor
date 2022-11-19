import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import DonateForm from './Pages/DonateForm';
import Used from './Pages/Used';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listings" element={<Listings />}/>
        <Route path="/donate" element={<DonateForm />}/>
        <Route path="/used" element={<Used />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
