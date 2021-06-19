import '../css/MeetupItem.css'
import {useState,useEffect} from 'react'
import MeetUpList from '../components/Meetuplist';

function AllMeetUps(){
    const [loading,setloading] = useState(true)
    const [meet_data,setmeet_data] = useState([])
    useEffect(()=>{
        fetch('https://meet-ups-63e82-default-rtdb.firebaseio.com/meetups.json').then( data =>{
            return data.json()
        }).then(data=>{
            const meetdata = []
            for (const key in data){
                const meetUp = {
                    id:key,
                    content:data[key]
                }
                meetdata.push(meetUp)
            }
            setloading(false)
            setmeet_data(meetdata)
        })
    },[]);

    if (loading){
        return (
            <div>
                <div className="spinner">
                    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
                </div>
            </div>
        )
    }

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
                            image = {meetup.content.image}
                            address = {meetup.content.address}
                            description = {meetup.content.description}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}

export default AllMeetUps