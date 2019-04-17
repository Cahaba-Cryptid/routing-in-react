import React from 'react';
import { Link } from 'react-router-dom';


const Card = props => {
    let { id } =props.film 
    return (
        <article className="col-md-6">
            <div className="card p-1 m-4">
                <div className="card-body">
                    <h1 className="card-title">{props.film.title}</h1>
                    {/* <p className="card-text">{props.film.description}</p> */}
                    <Link className="btn" to={`/film/${id}`}>More info</Link>
                </div>
            </div>
        </article>
    )
}

export default Card;
