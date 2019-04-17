import React from 'react';

const SinglePerson4 = props => {
    return(
        <article className="col-md-6">
            <div className="card p-1 m-4">
                <div className="card-body">
                    <h1 className="card-title">{props.person.name}</h1>
                    <p className="card-text">{props.person.age}</p>
                    <p className="card-text">{props.person.gender}</p>
                </div>
            </div>
        </article>
    )
}

export default SinglePerson4;