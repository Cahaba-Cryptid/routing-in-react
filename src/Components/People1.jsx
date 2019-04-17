import React, { Component } from 'react';
import PeopleCard2 from './PeopleCard2';

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
        return this.state.people.map(person => {
            return <PeopleCard2 key={person.id} person={person} />
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