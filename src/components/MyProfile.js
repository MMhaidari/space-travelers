import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const { missions } = useSelector((store) => store.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile-container">
      <section className="profile-section">
        <h3 className="profile-section__header">My Missions</h3>
        <table className="profile-table">
          <tbody>
            {missions.map(
              (mission) => mission.reserved && (
              <tr key={mission.missionId}>
                <th>{mission.missionName}</th>
              </tr>
              ),
            )}
          </tbody>
        </table>
      </section>
      <section className="profile-section">
        <h3 className="profile-section__header">My Rockets</h3>
        <table className="profile-table">
          <thead>
            <tr>
              {reservedRockets.length === 0 && (
                <td>No Rockets Reserved</td>
              )}
            </tr>
          </thead>
          <tbody>
            {reservedRockets.map((rockets) => (
              <tr key={rockets.id}>
                <td>{rockets.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MyProfile;
