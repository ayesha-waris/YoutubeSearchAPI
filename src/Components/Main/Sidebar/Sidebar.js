import classes from './Sidebar.module.css';

import { useState } from 'react';
import SideOptions from './SideOptions';
const Sidebar = () => {
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
    'play-arrow',
  ];
  const [Active, setActive] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    if (Active) {
    } else {
      console.log(e.target);
    }
  };
  return (
    <div className={classes.sidebar}>
      <div className={classes.nav}>
      <SideOptions icons={icons} iconNames={iconNames} handleClick={handleClick}/>
      </div>
    </div>
  );
};

export default Sidebar;
