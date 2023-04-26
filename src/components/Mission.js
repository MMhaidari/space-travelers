import './Mission.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const handleJoiningMission = () => {
    dispatch(joinMission(mission.missionId));
  };

  return (
    <tr>
      <th>{mission.missionName}</th>
      <th>{mission.description}</th>
      <th>
        <button
          type="button"
          onClick={handleJoiningMission}
          className="join-mission__button"
        >
          Join Mission
        </button>
      </th>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    missionId: PropTypes.string.isRequired,
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
