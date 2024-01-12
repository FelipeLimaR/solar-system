import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions" id="missions-id">
      <div>
        <Title headline="Missões" />
      </div>
      <div id="mission-cards-id">
        { missions.map((mission) => (
          <div key={ mission.name }>
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Missions;
