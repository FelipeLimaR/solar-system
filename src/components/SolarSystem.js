import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
// import PropTypes from 'prop-types'

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
      </div>
    );
  }
}

// SolarSystem.propTypes = {
//   planets: PropTypes.string,
// };

export default SolarSystem;
