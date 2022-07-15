
import Navbar from "./Components/Header/Navbar";

import Content from './Components/Main/Content';
import Sidebar from "./Components/Main/Sidebar/Sidebar";


const YoutubeLayout = () => {
 
  
  return ( 
    <div>
<Navbar />
   <main>
     <Sidebar/>
     <Content/>
   </main>
    </div>
   
   );
}
 
export default YoutubeLayout;