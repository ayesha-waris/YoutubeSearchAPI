
import './youtube-layout.css';
import Layout from './Layout';
import './Components/Header/navbarStyle.css';
import './Components/Main/mainStyle.css';
import './Components/Main/suggestion.css';
import './Components/Main/video.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Sidebar from './Components/Main/Sidebar';
import Content from './Components/Main/Content';
import PlayVideo from './Components/Main/Playvideo';
import './index.css';
import Home from './Home';
import Video from './Components/Main/Video';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <Sidebar/>
        <Routes>
        <Route path="/"  />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="video" element={<PlayVideo/>} />  
             */}
          
        </Routes>
      
   
    </Router>
    </div>
  );
}

export default App;
