import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import MissionsPage from './pages/MissionsPage';
import RocketPage from './pages/RocketPage';
import MyProfilePage from './pages/MyProfilePage';
import NotMatch from './pages/NotMatch';
=======
import MissionPage from './routes/MissionPage';
import RocketPage from './routes/RocketPage';
import MyProfilePage from './routes/MyProfilePage';
import NotMatch from './routes/NotMatch';
>>>>>>> development

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
