import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid="planet-card">
      <h3>
        <p data-testid="planet-name">
          {planetName}
        </p>
      </h3>
      <img
        src={ `${planetImage}` }
        alt={ `Planeta ${planetName}` }
      />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: 'Ceres',
  planetImage: 'Terra',
};

export default PlanetCard;
