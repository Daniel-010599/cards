import React from 'react';
import '../styles/card.css';

const Card = (props) =>{
    return(
        <div className="card text-center bg-dark ">
            <div className="overflow">
               <img src={props.card.img} alt={props.card.title} className="card-img-top"/> 
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{props.card.title}</h4>
                <p className="card-text text-secondary">{props.card.text}
                </p>
                <a href={props.card.link} rel="noreferrer" target="_blank" className="btn btn-outline-secondary rounded-0">Go to this website</a>
            </div>
        </div>
    )
}

export default Card; 