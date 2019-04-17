import React, { Component } from 'react';
import SinglePerson from './SinglePerson4'

class IndividualFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {}
        }
    }

    async componentDidMount() {
        try {
            let peepFetch = await fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            let person = await peepFetch.json();
            this.setState({ person })
        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        return (
            <>
            <main>
                <SinglePerson key={this.state.person.id} person={this.state.person} />
            </main>
            </>
        );
    }

}

export default IndividualFilm;