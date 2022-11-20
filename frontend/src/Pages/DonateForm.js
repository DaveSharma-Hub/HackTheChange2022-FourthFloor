import Header from "../Components/Header";
import './donateform.scss'
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

function DonateForm({data,setData}){
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

    const handleSubmitDonation = (e) =>{
        e.preventDefault();
        const tmp = data;
        const index = getIndex(tmp);
        console.log(index);
        if(index!=null){
            tmp[index].progress = parseInt(tmp[index].progress) + amount;
            setData(tmp);
            history('/');
        }else{
            alert('Try Again Please!');
        }
    }



    return(
        <div>
            <Header />
            <div className="donateForm">
                <div className="donateImg">
                    <img src="https://media.istockphoto.com/id/1370856587/photo/cropped-portrait-of-an-attractive-young-female-student-using-her-laptop-to-study-outside-on.jpg?b=1&s=170667a&w=0&k=20&c=iugztx7miDp42Pi5UKHaXq5VisV8GG0g1kBJhz1r6R8=" alt="image"/>
                </div>
                <div className = "form">
                    <div >
                        <h1>Make an online donation.</h1>
                        <form onSubmit={(e)=>{handleSubmitDonation(e)}}>
                            <input placeholder="Name(optional)" onChange={(e)=>{setName(e.target.value)}}/>
                            <button className={clickedFive ? "clicked" : "notClicked"} 
                                onClick={()=>{
                                    setAmount(5);
                                    handleSetClicked(setClickedFive,setClickedTwenty,setClickedFourty);
                            }} type="button">$5</button>
                            <button className={clickedTwenty ? "clicked" : "notClicked"} onClick={()=>{
                                setAmount(20);
                                handleSetClicked(setClickedTwenty,setClickedFive,setClickedFourty);
                                }} type="button">$20</button>
                            <button className={clickedFourty ? "clicked" : "notClicked"} onClick={()=>{
                                setAmount(40);
                                handleSetClicked(setClickedFourty,setClickedFive,setClickedTwenty);
                                }} type="button">$40</button>
                            <input placeholder="other amount($)" type="number" value={amount} onChange={(e)=>{
                                setAmount(e.target.ariaValueNow);
                                setClickedFive(false);
                                setClickedFourty(false);
                                setClickedTwenty(false);
                                }}/>
                            <button type="submit">Donate</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateForm;