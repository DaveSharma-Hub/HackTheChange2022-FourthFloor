import './missionstatement.scss';

function MissionStatement(){
    return(
        <div>
            <div className="missionstatement">
                <div className="missionstatement_image">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Calgary_Dinos_logo.svg/800px-Calgary_Dinos_logo.svg.png" alt="image"/>
                </div>
                <div className="statement_button">
                    <h2>Help Students Now!</h2>
                    <button>Donate</button>
                </div>
                
            </div>
            <h1>Mission Statement</h1>
        </div>
    )
}
export default MissionStatement;