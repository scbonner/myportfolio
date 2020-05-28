import React from 'react';

const Featured = ({match}) => {
    let title = match.params.title;
    let description = match.params.description;

    return (
        <div className="main-content">
        <h2>{title}</h2>
        <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{description}</strong>!</p>
        </div>
  );
}

export default Featured;