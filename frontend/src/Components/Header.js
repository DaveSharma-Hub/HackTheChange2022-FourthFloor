import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';


function Header(){
    const history = useNavigate();

    return(
        <div className='header'>
            <div className='logo'>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Calgary_Dinos_logo.svg/800px-Calgary_Dinos_logo.svg.png" alt="image"/>
            </div>
            <form className='search'>
                <input />
                <button type="submit">Search</button>
            </form>
            <button className='donate'>Donate</button>
            <button className='listings' onClick={()=>{history('/listings')}}>Listings</button>
        </div>
    )
}

export default Header;