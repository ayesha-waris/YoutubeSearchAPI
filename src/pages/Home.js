import SearchResult from "../Components/Main/SearchResult";

import { Fragment } from "react";
import SideBar from "../Components/SideBar/Sidebar";

const Home = () => {

  return ( 
    <Fragment> 
      <SideBar/>
     <SearchResult/> 
     </Fragment>
     
   );
}
 
export default Home;