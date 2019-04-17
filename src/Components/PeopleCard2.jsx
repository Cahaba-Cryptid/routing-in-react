import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCard2 = props => {
    let { id } = props.person;
    return (
        <article className="col-md-6">
            <div className="card shadow p-1 m-4">
                <div className="card-body">
                    <h1 className="card-title">Name: {props.person.name}</h1>
                    <Link className="btn" to={`/Person/${id}`}>More info</Link>
                </div>
            </div>
        </article>
    )
}

export default PeopleCard2; 