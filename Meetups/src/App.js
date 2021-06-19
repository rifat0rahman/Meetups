import { Route, Switch } from 'react-router-dom'
import AllMeetUps from  './pages/AllMeetUps.jsx';
import Favourite from './pages/Favourite.jsx';
import NewMeetUps from './pages/NewMeetUps.jsx';
import Navbar from './components/navbar'

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <AllMeetUps />
                </Route>
                <Route path='/favourite'>
                    <Favourite />
                </Route>
                <Route path='/newmeetups'>
                    <NewMeetUps />
                </Route>
            </Switch>
        </div>
    )
}

export default App;