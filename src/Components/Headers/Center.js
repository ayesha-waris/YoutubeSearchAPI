import { useState, useContext } from "react";
import classes from './Center.module.css';
import AuthContext from "../../store/search-auth";
const Center = () => {

  const ctx = useContext(AuthContext);
  const [keyword, setKeyword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if(keyword.length > 0) {
      ctx.onSubmitHandler(keyword);
    }
   
  };
  return ( 
    <>
     <div className = {classes.search}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button >
            {' '}
            <i className="material-icons">search</i>
          </button>
        </form>
        <i className={`material-icons ${classes.mic}`}>mic</i>
      </div>
     
      {/* {searchResult && <Content searchResult = {searchResult}/>} */}
    
    
    </>
   );
}
 
export default Center;