import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';
import websiteLogo from '../assets/logo.png';
import Donate from './Donate';

function Header(){
    const history = useNavigate();
    const [modal, setModal] = useState(false);
    return(
        <div className='header'>
            {
                modal ?
                <div className="modalHeader" style={{position:'fixed',top:'30%',left:'40%',zIndex:'1'}}>
                    <Donate setModal={setModal}/>
                </div>
                : null
            }
            <div className='logo'>
                <a href = '/'>
                <img src = {websiteLogo} alt=""/>
                </a>
            </div>
            <form className='search'>
                <input />
                <button type="submit">Search</button>
            </form>
            <button className='donate' onClick={()=>{setModal(!modal)}}>Donate</button>
            <button className='listings' onClick={()=>{history('/listings')}}>Listings</button>
            <button className="used" onClick={()=>{history('/used')}}>Used</button>
        </div>
    )
}

export default Header;