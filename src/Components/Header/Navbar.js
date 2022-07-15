import Center from "./Center";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import classes from './Navbar.module.css';
const Navbar = () => {
  return ( 
    <div className= {classes.header}>
      
 <LeftSide/>
 <Center/>
 <RightSide/>
 
    </div>
   );
}
 
export default Navbar;