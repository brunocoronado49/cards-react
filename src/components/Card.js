import React from 'react'
import PropTypes from 'prop-types';
import './cards.css';

function Card({title, image, text, link}) {
    return (
        <div>
          <div className="card text-center bg-dark">
            <div className="overflow">
              <img src={image} alt="akame" width="100%" className="card-img-top"/>
            </div>
            <div className="card-body text-light">
              <h3>{title}</h3>
              <p className="card-text text-secondary">
                {
                  text ? text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident corporis culpa est reprehenderit commodi voluptatum officia placeat fugit. Rem, saepe excepturi modi quia doloribus odio assumenda ea atque quis distinctio.'
                }
              </p>
                <a href={link} className="btn btn-outline-secondary" target="_blank">
                  Go to Web
                </a>
            </div>
          </div>
        </div>
    )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string
}

export default Card
