import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';
import websiteLogo from '../assets/logo.png';

function Header(){
    const history = useNavigate();

    return(
        <div className='header'>
            <div className='logo'>
                <a href = '/'>
                <img src = {websiteLogo} alt=""/>
                </a>
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