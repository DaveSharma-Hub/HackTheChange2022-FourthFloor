import Header from "../Components/Header";
import './donateform.scss'
import {useState} from 'react';

function DonateForm(){
    const [amount, setAmount] = useState(0);
    const [name,setName] = useState('');

    return(
        <div>
            <Header />
            <div className="donateForm">
                <div className="donateImg">
                    <img src="https://media.istockphoto.com/id/1370856587/photo/cropped-portrait-of-an-attractive-young-female-student-using-her-laptop-to-study-outside-on.jpg?b=1&s=170667a&w=0&k=20&c=iugztx7miDp42Pi5UKHaXq5VisV8GG0g1kBJhz1r6R8=" alt="image"/>
                </div>
                <div className = "form">
                    <form>
                        <h1>Donate to us! Make an online donation.</h1>
                        <form onSubmit={()=>{}}>
                            <input placeholder="Name(optional)" onChange={(e)=>{setName(e.target.value)}}/>
                            <button onClick={()=>{setAmount(5)}} type="button">$5</button>
                            <button onClick={()=>{setAmount(20)}} type="button">$20</button>
                            <button onClick={()=>{setAmount(40)}} type="button">$40</button>
                            <input placeholder="other amount($)" type="number" value={amount} onChange={(e)=>{setAmount(e.target.ariaValueNow)}}/>
                            <button type="submit">Donate</button>
                        </form>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DonateForm;