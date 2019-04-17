import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './Films1';
import Home from './Home'
import Navbar from './Navbar';
import People from './People1';
import IndividualFilm from './IndividualFilm3';
import IndividualPerson from './IndividualPerson3'

const App = () => {
        return (
            <Router>
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/Films" component={Films}></Route>
                        <Route exact path="/People" component={People}></Route>
                        <Route exact path="/Film/:id" component={IndividualFilm}></Route>
                        <Route exact path="/Person/:id" component={IndividualPerson}></Route>
                    </Switch>
            </Router>
        );
}

export default App;