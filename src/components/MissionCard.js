import React from 'react';
import PropTypes from 'prop-types';

function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card" className="mission-card-class">
      <h3>

        <p data-testid="mission-name">
          {`${name}`}
        </p>
      </h3>
      <p data-testid="mission-year">
        {`${year}`}
      </p>
      <p data-testid="mission-country">
        {`${country}`}
      </p>
      <p data-testid="mission-destination">
        {`${destination}`}
      </p>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};

export default MissionCard;
