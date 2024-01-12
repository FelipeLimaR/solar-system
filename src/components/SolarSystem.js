import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system" id="solar-sistem-id">

      <div>
        <Title headline="Planetas" />
      </div>

      <div id="planet-cards-id">
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>

    </div>
  );
}

export default SolarSystem;
