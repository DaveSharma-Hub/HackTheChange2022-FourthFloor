import Card from "../Components/Card";
import Header from "../Components/Header";
import './listing.scss';

function Listings(){
    const listingData = [
        {
            img:"https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Calgary_Dinos_logo.svg/800px-Calgary_Dinos_logo.svg.png",
            itemList:["Books","Pencils"],
            total:"123",
            progress:"54",
            description:"Cool supplies and stuff"
        }
    ];

    const data = {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Calgary_Dinos_logo.svg/800px-Calgary_Dinos_logo.svg.png",
        itemList:["Books","Pencils"],
        total:"123",
        progress:"54",
        description:"Cool supplies and stuff and more stuff"
    };

    return(
        <div className="listings">
            <Header />
            <div className="listingCards">
                {
                    [...Array(26)].map((item,index)=>{
                        return <Card key={index} data={data}/>
                    })
                
                }
            </div>
        </div>
    )
}

export default Listings;