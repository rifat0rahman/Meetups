
import { createContext, useState } from "react";

const FavContext = createContext({
    favorite: [],
    totalfav: 0,
})

export function FavContextProvider(props) {
    const [favorites, setfavorites] = useState([])

    function addfav(favmeetup) {
        setfavorites((prevfav) => {
            return prevfav.concat(favmeetup)
        })
    }

    function removefav(meetupid) {
        setfavorites((prevfav) => {
            return prevfav.filter(meetup => meetup.id !== meetupid);
        })
    }

    function itemisfav(meetupid) {
        return favorites.some(meetup => meetup.id === meetupid)
    }

    const context = {
        favorite: favorites,
        totalfav: favorites.length,
        addfavourite: addfav,
        removefavourite: removefav,
        itemisfavourite: itemisfav,
    }
    return <FavContext.Provider value={context}>
        {props.children}
    </FavContext.Provider>
}

export default FavContext;