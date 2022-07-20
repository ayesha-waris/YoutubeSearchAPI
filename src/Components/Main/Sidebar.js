import { Link } from 'react-router-dom';
import { useState } from 'react';
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
  const handleClick  = (e) =>{
    if(Active){
      
    }
    else{
      console.log(e.target);
    }
  }
  return (
    <div className="side-bar">
      <div className="nav ">
        {icons.map((icon, num) => (
          <div className="nav-link" key={num} > 

          <Link  to="/" 
          onClick =  {handleClick}>
           
            <i className="material-icons">{icon}</i>
            <span>{iconNames[num]}</span>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
