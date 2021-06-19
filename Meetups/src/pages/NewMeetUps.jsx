import Newmeetups from "../components/newmeetups"
import { useHistory } from 'react-router-dom'

function NewMeetUps() {
    const history = useHistory();
    function addmeetuphandler(meetupdata) {
        fetch('https://meet-ups-63e82-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupdata),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        })
    }
    return (
        <div>
            <div>
                <Newmeetups addmeetups={addmeetuphandler} />
            </div>
        </div>
    )
}
export default NewMeetUps