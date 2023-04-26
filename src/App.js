import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import MyProfilePage from './routes/MyProfilePage';
import NotMatch from './routes/NotMatch';
import MissionsPage from './routes/MissionsPage';
import RocketPage from './routes/RocketPage';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="/missionpage" element={<MissionsPage />} />
        <Route path="/profilepage" element={<MyProfilePage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </main>
  );
}

export default App;
