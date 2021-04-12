import React from 'react';
import Card from './Card';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';

const card = [
        {
            id:1,
            img:Image1,
            title:'Linkedin',
            text:'Mi perfil de Linkedin',
            link:'https://www.linkedin.com/in/daniel-bravo-536a52173/'
        },
        {
            id:2,
            img:Image2,
            title:'GitHub',
            text:'Mi perfil de Github',
            link:'https://github.com/Daniel-010599'
        },
        {
            id:3,
            img:Image3,
            title:'Youtube',
            text:'Pagina de Youtube',
            link:'https://www.youtube.com'
        }
    ]

const Cards = () =>{

    return(
        <div className="container d-flex justify-content-center align-items-center py-5 min-vh-100 animate__animated animate__fadeInUp">
            <div className="row">
                {card.map((card)=>
                    <div key={card.title} className="col-md-4 my-3"><Card  card={card}/></div>
                )}
            </div>
        </div>
    )
}

export default Cards;