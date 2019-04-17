import React, { Component } from 'react';
import SingleFilmCard from './SingleFilmCard'

class IndividualFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: {}
        }
    }

    async componentDidMount() {
        try {
            let filmFetch = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.params.match.id}`)
            let film = await filmFetch.json();
            this.setState({ film })
        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        let { title } = this.state.film
        return (
            <>
            <main>
                <SingleFilmCard key={this.state.film.id} film={this.state.film} />
            </main>
            </>
        );
    }

}

export default IndividualFilm;