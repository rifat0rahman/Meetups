import MeetUpList from "../components/Meetuplist"
import {useContext} from 'react'
import FavContext from "../store/fav-context"

function Favourite(){
    const favdata = useContext(FavContext)
    const meet_data = favdata.favorite
    return (
        <div className="main">
            <div>
                <h1 className="head-text">All MeetUps</h1>
            </div>
            <div>
                <ul>
                    {meet_data.map(meetup=>{
                        return (
                            <MeetUpList 
                            key = {meetup.id}
                            id = {meetup.id}
                            image = {meetup.image}
                            address = {meetup.address}
                            description = {meetup.description}
                            />
                        )
                    })}
                </ul>
            </div>
            <div style={{textAlign:'center',fontFamily:'arial'}}>
                {favdata.totalfav === 0 ?<p>YOU HAVE NO FAVOURITE ITEM</p>:'' }
            </div>
        </div>
    )
}
export default Favourite