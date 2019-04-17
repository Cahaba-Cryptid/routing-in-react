import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './Films';
import Home from './Home'
import Navbar from './Navbar';
import People from './People';
import IndividualFilm from './IndividualFilm';


const App = () => {
        return (
            <Router>
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/Films" component={Films}></Route>
                        <Route exact path="/People" component={People}></Route>
                        <Route exact path="/Films/:id" component={IndividualFilm}></Route>
                    </Switch>
            </Router>
        );
}

export default App;