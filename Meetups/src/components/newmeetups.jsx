import '../css/NewMeetupForm.css'
import { useRef } from 'react'

function Newmeetups(props) {
    const title = useRef()
    const img = useRef()
    const address = useRef()
    const description = useRef()

    function submeetups(event) {
        event.preventDefault();

        const titleVal = title.current.value;
        const imgVal = img.current.value;
        const addressVal = address.current.value;
        const descriptionVal = description.current.value;

        const meetupdata = {
            title: titleVal,
            image: imgVal,
            address: addressVal,
            description: descriptionVal,
        }
        props.addmeetups(meetupdata)
    }


    return (
        <div className="container">
            <div className="card">
                <div>
                    <h1>Add New MeetUps</h1>
                </div>
                <form className="form" onSubmit={submeetups}>
                    <div className="control">
                        <label htmlFor="title">Meetup Title</label>
                        <input type="text" required id="title" ref={title} />
                    </div>
                    <div className="control">
                        <label htmlFor="img">Meetup Image</label>
                        <input type="text" required id="img" ref={img} />
                    </div>
                    <div className="control">
                        <label htmlFor="address">Meetup address</label>
                        <input type="text" required id="address" ref={address} />
                    </div>
                    <div className="control">
                        <label htmlFor="des">Meetup description</label>
                        <input type="text" required id="des" ref={description} />
                    </div>
                    <div className="actions">
                        <button>Add Meetup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Newmeetups;