import React, { Component } from 'react';
import PersonCard from './PersonCard';

class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }

    async componentDidMount() {
        try {
            let peopleFetch = await fetch(`https://ghibliapi.herokuapp.com/people`)
            let people = await peopleFetch.json();
            this.setState({ people })
        } catch (errPeeps) {
            console.log(errPeeps)
        }
    }

    renderPeople() {
        return this.state.people.map(people => {
            return <PersonCard key={people.id} person={people} />
        })
    }
    render() {
        return (
            <>
                <section>
                    {this.renderPeople()}
                </section>
            </>
        )
    }

}




export default People;