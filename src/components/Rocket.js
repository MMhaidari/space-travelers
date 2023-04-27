import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({ rocket, handleReserveClick, onCancelClick }) => (
  <section>
    <div className="rocket">
      <div>
        {rocket.flickr_images && rocket.flickr_images.length > 0 && (
        <img src={rocket.flickr_images[0]} alt={`Rocket ${rocket.name}`} />
        )}
      </div>
      <div>
        <h2 className="rocket-head">{rocket.name}</h2>
        <p className="rocket-text">
          <span className={rocket.reserved === true ? 'show' : 'hidden'}>Reserved</span>
          {rocket.description}
        </p>
        {rocket.reserved && (
        <button
          type="button"
          className="cancel-btn"
          onClick={() => onCancelClick(rocket.id)}
        >
          Cancel Reservation
        </button>
        )}
        {!rocket.reserved && (
        <button
          type="button"
          className="reserve-btn"
          onClick={() => handleReserveClick(rocket.id)}
        >
          Reserve Rocket
        </button>
        )}
      </div>
    </div>
  </section>
);

Rocket.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleReserveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

export default Rocket;
