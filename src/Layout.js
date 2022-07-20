
import Navbar from "./Components/Header/Navbar";
import Sidebar from './Components/Main/Sidebar';
import Content from './Components/Main/Content';


const YoutubeLayout = () => {
 
  
  return ( 
    <div>
<Navbar/>
   <main>
     <Sidebar/>
     <Content/>
   </main>
    </div>
   
   );
}
 
export default YoutubeLayout;