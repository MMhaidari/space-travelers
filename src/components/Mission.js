import './Mission.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const handleJoiningMission = () => {
    dispatch(joinMission(mission.missionId));
  };
  const handleLeavingMission = () => {
    dispatch(leaveMission(mission.missionId));
  };

  return (
    <tr>
      <th>{mission.missionName}</th>
      <th>{mission.description}</th>
      <th>
        {mission.reserved && (
          <button
            className="leave-mission__button"
            type="button"
            onClick={handleLeavingMission}
          >
            Leave Mission
          </button>
        )}
        {!mission.reserved && (
          <button
            type="button"
            onClick={handleJoiningMission}
            className="join-mission__button"
          >
            Join Mission
          </button>
        )}
      </th>
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
