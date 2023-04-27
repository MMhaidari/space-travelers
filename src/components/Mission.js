import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
import './Mission.css';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const handleJoiningMission = () => {
    dispatch(joinMission(mission.missionId));
  };
  const handleLeavingMission = () => {
    dispatch(leaveMission(mission.missionId));
  };

  return (
    <tr className="mission-container">
      <th className="mission-name">{mission.missionName}</th>
      <th className="mission-description">{mission.description}</th>
      {mission.reserved && (
        <>
          <th>
            <p className="active-member">Active member</p>
          </th>
          <th>
            <button
              className="leave-mission__button"
              type="button"
              onClick={handleLeavingMission}
            >
              Leave Mission
            </button>
          </th>
        </>
      )}
      {!mission.reserved && (
        <>
          <th>
            <p className="not-a__member">NOT A MEMBER</p>
          </th>
          <th>
            <button
              type="button"
              onClick={handleJoiningMission}
              className="join-mission__button"
            >
              Join Mission
            </button>
          </th>
        </>
      )}
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    missionId: PropTypes.string.isRequired,
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
