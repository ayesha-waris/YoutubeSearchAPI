import classes from './SideOptions.module.css';
import { Link } from 'react-router-dom';
const SideOptions = (props) => {
  return ( 
 <>
   {props.icons.map((icon, num) => (
          <div className={classes.nav} key={num}>
            <Link to="/" onClick={props.handleClick}>
              <i className="material-icons">{icon}</i>
              <span>{props.iconNames[num]}</span>
            </Link>
          </div>
        ))}
 </>
   );
}
 
export default SideOptions;