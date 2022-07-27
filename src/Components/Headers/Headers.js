import Center from './Center';
import classes from './Headers.module.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
const Headers = () => {
  return (  
<header className={classes.header}>
      
      <LeftSide/>
      <Center/>
      <RightSide/>
         </header>
  );
}
 
export default Headers;