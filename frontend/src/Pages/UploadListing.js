import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './uploadlisting.scss'
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

function UploadListing({data,setData}){
    const [amount, setAmount] = useState(5);
    const [name,setName] = useState('');
    const [clickedFive,setClickedFive] = useState(true);
    const [clickedTwenty,setClickedTwenty] = useState(false);
    const [clickedFourty,setClickedFourty] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    let id = searchParams.get('id');
    const history = useNavigate();

    const handleSetClicked = (setState,setOther1,setOther2) =>{
        setState(true);
        setOther1(false);
        setOther2(false);
    }

    const getIndex = (data) =>{
       for(let i=0;i<data.length;i=i+1){
        console.log(data[i].id)
        if(data[i].id===parseInt(id)){
            return i;
        }
       }
       return null;
    }

    const handleUploadListing = (e) =>{
        e.preventDefault();
        if(id===null){
            alert('Thanks for making a listing!');
            history('/');
        }else{
            const tmp = data;
            const index = getIndex(tmp);
            console.log(index);
            if(index!=null){
                tmp[index].progress = parseInt(tmp[index].progress) + amount;
                if(parseInt(tmp[index].progress)>parseInt(tmp[index].total)){
                    tmp[index].progess = tmp[index].total;
                }
                setData(tmp);
                alert('Thanks for making a listing!');
                history('/');
            }else{
                alert('Try Again Please!');
            }
        }
    }

    let percentString;
    const donation = data[getIndex(data)];
    if(donation){
        const percent = (parseFloat(donation.progress)/parseFloat(donation.total))*100;
        percentString = percent.toString().split('.')[0];
    }
    return(
        <div>
            <Header />
            <div className="listingform">
                <div className = "form">
                    <div >
                        <h1>Make a listing.</h1>
                        <form onSubmit={(e)=>{handleUploadListing(e)}}>
                            <input placeholder="Item Name" onChange={(e)=>{setName(e.target.value)}} autoComplete="off"/>
                            <input placeholder="Requested Price" type="number" value={amount} onChange={(e)=>{
                                setAmount(e.target.ariaValueNow);
                                setClickedFive(false);
                                setClickedFourty(false);
                                setClickedTwenty(false);
                                }}/>
                            <button type="submit">Upload</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UploadListing;