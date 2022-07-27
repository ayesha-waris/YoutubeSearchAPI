import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
  const icons = [
    'home',
    'explore',
    'local_fire_department',
    'subscriptions',
    'library_add_check',
    'history',
    'watch_later',
    'thumb_up',
    'play_arrow',
  ];
  const iconNames = [
    'Home',
    'Explore',
    'Trending',
    'Subscriptions',
    'Library',
    'History',
    'Watch Later',
    'Liked videos',
    'Play-arrow',
  ];
  


  return (

    <div className= {classes.sidebar}>
      <div className={classes.nav}>
        {icons.map((icon, num) => (
          
          <div  className={`${classes.navLink}`} key={num} > 

          <NavLink  to="/"  >
               <i className="material-icons">{icon}</i>
            <span>{iconNames[num]}</span>
          </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default SideBar;