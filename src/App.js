import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import MissionPage from './pages/MissionPage';
import RocketPage from './pages/RocketPage';
import MyProfilePage from './pages/MyProfilePage';
import NotMatch from './pages/NotMatch';

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
