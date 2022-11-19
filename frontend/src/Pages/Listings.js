import Card from "../Components/Card";
import Header from "../Components/Header";
import './listing.scss';

function Listings(){
    const listingData = [
        {
            img:"https://cdn.pixabay.com/photo/2014/07/28/19/12/calculator-404000__340.png",
            total:"25",
            progress:"0",
            description:"TI-30XIIS Scientific Calculator"
        },
        {
            img:"https://img.freepik.com/free-photo/desk-cluttered-with-office-supplies_93675-135114.jpg?w=2000",
            total:"123",
            progress:"54",
            description:"Cool supplies and stuff"
        },
        {
            img:"https://www.openculture.com/wp-content/uploads/2014/06/free-textbooks1.jpg",
            total:"150",
            progress:"10",
            description:"Calculus Textbook"
        },
        {
            img:"https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/1112-lab-coat-emoji-coloring-page.png",
            total:"30",
            progress:"25",
            description:"Lab Coat and Lab Goggles"
        },
        {
            img:"https://www.openculture.com/wp-content/uploads/2014/06/free-textbooks1.jpg",
            total:"275",
            progress:"275",
            description:"Chemistry and Biology Textbook"
        },
    ];
    return(
        <div className="listings">
            <Header />
            <div className="listingCards">
                {
                    listingData.map((item,index)=>{
                        return <Card key={index} data={item}/>
                    })
                
                }
            </div>
        </div>
    )
}

export default Listings;