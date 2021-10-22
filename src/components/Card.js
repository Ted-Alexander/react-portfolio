import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };


  return (
    <div>
      <div className="card col-sm-4"  style={cardStyle}>
        <img
          className="card-img-top"
          src= {props.image} 
          alt="project image"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.deploy} className="btn btn-primary">
             Link to the Site
          </a>
          <a href={props.github} className="btn btn-primary">
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
}
