import Header from "../Components/Header";
import './donateform.scss'

function DonateForm(){
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
                            <input placeholder="Name(optional)"/>
                            <button>$5</button>
                            <button>$20</button>
                            <button>$40</button>
                            <input placeholder="other amount($)" />
                            <button type="submit">Donate</button>
                        </form>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DonateForm;