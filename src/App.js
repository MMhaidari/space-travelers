import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import MissionPage from './routes/MissionPage';
import RocketPage from './routes/RocketPage';
import MyProfilePage from './routes/MyProfilePage';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="/missionpage" element={<MissionPage />} />
        <Route path="/profilepage" element={<MyProfilePage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </main>
  );
}

export default App;
