import './MissionsPage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import Mission from '../components/Mission';

const MissionsPage = () => {
  const { missions, status } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') dispatch(getMissions());
  }, [dispatch, status]);
  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="missions-container">
        {missions.map((mission) => (
          <Mission key={mission.missionId} mission={mission} />
        ))}
      </tbody>
    </table>
  );
};

export default MissionsPage;
