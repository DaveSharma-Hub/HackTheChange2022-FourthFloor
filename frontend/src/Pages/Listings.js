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
    return(
        <div className="listings">
            <Header />
            <div className="listingCards">
                {/* <Card /> */}
                {
                    [...Array(36)].map((item,index)=>{
                        return <div>Card</div>
                    })
                }
            </div>
        </div>
    )
}

export default Listings;