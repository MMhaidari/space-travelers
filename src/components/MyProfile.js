import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
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
      </section>
    </div>
  );
};

export default MyProfile;
