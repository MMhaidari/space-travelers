import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

const MissionsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return <div>Mission page</div>;
};

export default MissionsPage;
