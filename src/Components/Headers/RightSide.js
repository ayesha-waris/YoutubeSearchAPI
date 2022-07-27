import classes from './RightSide.module.css';

const RightSide = () => {
  const icons = ["videocam","apps","notifications","account_circle"];
  return ( 
    <div className= {classes.right}>
      {
        icons.map((icon, num) => (
          <i className="material-icons" key={num}>{icon} </i>
          
        ))
      }
 
 </div>
  );
}
 
export default RightSide;