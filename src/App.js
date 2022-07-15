
import './youtube-layout.css';

import './Components/Main/mainStyle.css';
import './Components/Main/suggestion.css';
import './Components/Main/video.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Sidebar from './Components/Main//Sidebar/Sidebar';

import './index.css';


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
