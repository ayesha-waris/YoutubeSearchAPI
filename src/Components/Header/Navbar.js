import Center from "./Center";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Navbar = () => {
  return ( 
    <div className="header">
      
 <LeftSide/>
 <Center/>
 
 <RightSide/>
 
    </div>
   );
}
 
export default Navbar;