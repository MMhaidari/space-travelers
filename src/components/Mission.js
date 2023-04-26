import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <tr>
    <th>{mission.missionName}</th>
    <th>{mission.description}</th>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
