import {Link,NavLink} from 'react-router-dom'

// css files
import '../css/MainNavigation.css'

function Navbar(){
    return (
        <div className="header">
            <div className="logo">React MeetUps</div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/">All MeetUps</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favourite">Favourite</NavLink>
                        </li>
                        <li>
                            <NavLink to="/newmeetups">NewMeetUps</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>  
        </div>
    )
}
export default Navbar