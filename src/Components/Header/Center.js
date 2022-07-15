import classes from './Center.module.css';
import { useState } from 'react';
import Content from '../Main/Content';
import axios from 'axios';
const Center = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const YouTube_API_KEY = "AIzaSyBNuCk59QmbF3kLy9hMNurSQ-2flguVpBw" ;
  const URL ="https://www.googleapis.com/youtube/v3/search"
 
  const options = {
    part:"snippet",
    key:YouTube_API_KEY,
    maxResults:10,
    q:keyword,
 };
 const requestSearch = () =>{
   axios({
     method: "get",
     url: URL,
     params: options,
   }).then((response) => {
     setSearchResult(response.data.items);
    
   });
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    requestSearch()

  };
  return (
    <>
      <div className={classes.search}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button>
            {' '}
            <i >search</i>
          </button>
        </form>
        <i className={`material-icons ${classes.mic}`}>mic</i>
      </div>
      {console.log(searchResult)}
      {searchResult && <Content searchResult = {searchResult}/>}
     
    </>
  );
};

export default Center;
