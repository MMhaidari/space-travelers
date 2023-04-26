import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({ rocket }) => (
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
        {!rocket.reserved && (
        <button
          type="button"
          className="reserve-btn"
        >
          Reserve Rocket
        </button>
        )}
        {rocket.reserved && (
        <button
          type="button"
          className="cancel-btn"
        >
          Cancel Reservation
        </button>
        )}
      </div>
    </div>
  </section>
);

Rocket.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Rocket;
