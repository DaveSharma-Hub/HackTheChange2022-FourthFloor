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
    return(
        <div className="listings">
            <Header />
            <div>
                <Card />
            </div>
        </div>
    )
}

export default Listings;