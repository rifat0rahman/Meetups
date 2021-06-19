import {useContext} from 'react'
import FavContext from '../store/fav-context';

function MeetUpList(props) {
    const  FavouriteItems = useContext(FavContext)
    const itemisfav = FavouriteItems.itemisfavourite(props.id)

    function togglefav(){
        if(itemisfav){
            FavouriteItems.removefavourite(props.id)
        }
        else{
            FavouriteItems.addfavourite({
                id:props.id,
                image:props.image,
                address:props.address,
                description:props.description,
            })
        }
    }


    return (
        <div key={props.id} className="item">
            <div>
                <img src={props.image} className="image" alt="meetupimg" />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className="actions">
                <button onClick={togglefav}>
                    {itemisfav?'Remove from Favourite':'To Favourite'}
                </button>
            </div>
        </div>
    )
}
export default MeetUpList