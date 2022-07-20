import { Navigate, Route, Routes } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import PlayVideo from './pages/Playvideo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video/*" element={<PlayVideo />} />
      </Routes>
    </div>
  );
}

export default App;
