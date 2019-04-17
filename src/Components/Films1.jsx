import React, { Component } from 'react';
import FilmCard from './FilmCard2';

class Films extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }
    async componentDidMount() {
        try {
            let filmFetch = await fetch(`https://ghibliapi.herokuapp.com/films`)
            let films = await filmFetch.json();
            this.setState({ films })
        } catch (errFilm) {
            console.log(errFilm);
        }
    }

    renderFilms() {
        //pushes data to be rendered
        return this.state.films.map(film => {
            //pushes data into new array
            return <FilmCard key={film.id} film={film} />;
        })
    }

    render() {
        return (
            <>
                <section>
                    {this.renderFilms()}
                </section>
            </>
        )
    }
}

export default Films;