import './missionstatement.scss';

function MissionStatement(){
    return(
        <div>
            <div className="missionstatement">
                <div className="missionstatement_image">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png" alt="image"/>
                </div>
                <div className="statement_button">
                    <h2>Help Students Now!</h2>
                    <button>Donate</button>
                </div>
            </div>
            <div className ="mission">
                <h1 className = "h1">The Mission</h1>
                <p className = "p">Supplied aims to provide all U of C students the tools they need to succeed at University. Students in need will be able to get any supplies they require thanks to our helpful supporters. Our goal is for all students to be able to learn!</p>
            </div>
            <div className = "about">
                <div className="aboutUsPageHeader">
                    <h1 >About Us</h1>
                </div>
                <div className = "aboutUsPageParagraph">
                    <p >Supplied started during the YYC Code The Change 2022 Hackathon, where our team of 5 had an idea that could help all students reach their educatonal goals
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MissionStatement;