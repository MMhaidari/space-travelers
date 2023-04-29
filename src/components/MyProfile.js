import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((store) => store.rockets.rockets);
  const { missions } = useSelector((store) => store.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className="profile-container">
      <section className="profile-section">
        <h3 className="profile-section__header name">My Missions</h3>
        <table className="profile-table">
          <thead>
            <tr>
              {reservedMissions.length === 0 && (
                <td className="name">No Missions Reserved</td>
              )}
            </tr>
          </thead>
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.missionId}>
                <th className="name">{mission.missionName}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="profile-section">
        <h3 className="profile-section__header name">My Rockets</h3>
        <table className="profile-table">
          <thead>
            <tr>
              {reservedRockets.length === 0 && (
                <td className="name">No Rockets Reserved</td>
              )}
            </tr>
          </thead>
          <tbody>
            {reservedRockets.map((rockets) => (
              <tr key={rockets.id}>
                <th className="name">{rockets.name}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MyProfile;
