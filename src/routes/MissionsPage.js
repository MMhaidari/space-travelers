import './MissionsPage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import Mission from '../components/Mission';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => <Mission key={mission.missionId} mission={mission} />)}
      </tbody>
    </table>
  );
};

export default MissionsPage;
