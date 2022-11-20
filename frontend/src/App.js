import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import DonateForm from './Pages/DonateForm';
import listingData from './database';
import {useState} from 'react';

function App() {
  const [data,setData] = useState(listingData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listings" element={<Listings listingData={data}/>}/>
        <Route path="/donate" element={<DonateForm data={data} setData={setData}/>}/>
        {/* <Route path="/used" element={<Used />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
