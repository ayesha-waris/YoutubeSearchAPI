import { Navigate, Route, Routes } from 'react-router-dom';
import Headers from './Components/Headers/Headers';
import SideBar from './Components/SideBar/Sidebar';

import './index.css';
import Home from './pages/Home';
import PlayVideo from './pages/Playvideo';

function App() {
  return (
    <div >

      <Headers/>
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/video/:id" element={<PlayVideo />} />
      </Routes>
    </div>
  );
}

export default App;
