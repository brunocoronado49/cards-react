import React from 'react'
import Card from './Card';
import AkameOne from '../assets/akame1.jpg';
import AkameTwo from '../assets/akame2.jpg';
import AkameThree from '../assets/akame3.png';

function Cards() {

    const cards = [
        {
            id: 1,
            title: "Akame",
            image: AkameOne,
            link: "https://www.facebook.com/"
        },
        {
            id: 2,
            title: "Akame Ga",
            image: AkameTwo,
            link: "https://www.instagram.com/"
        },
        {
            id: 3,
            title: "Akame Ga Kill",
            image: AkameThree,
            link: "https://www.tiktok.com/es?lang=es"
        },
    ]

    return (
        <div className="container d-flex h-100 align-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card 
                            title={card.title}
                            image={card.image}
                            link={card.link}
                            text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
