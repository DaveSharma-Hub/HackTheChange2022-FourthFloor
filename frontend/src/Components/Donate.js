import { useNavigate } from "react-router-dom";
import './donate.scss';

function Donate({setModal}){
    const history = useNavigate();

    return(
        <div className="donate">
                <div className="firstToDisplay">
                    <button className="ListingDonatePage" onClick={()=>{history('/listings')}}>Donate to Listings!</button>
                    <button className="DonateWebsitePage" onClick={()=>{history('/donate')}}>Donate to Website!</button>
                </div>
                <button className="donatePageButtonCancel" onClick={()=>{setModal(false)}}>Cancel</button>
        </div>
    )
}

export default Donate;