import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const YouTube_API_KEY = "AIzaSyBNuCk59QmbF3kLy9hMNurSQ-2flguVpBw" ;
const URL ="https://www.googleapis.com/youtube/v3/search";


 const AuthContext = React.createContext({
  searchKey: '',
  searchResult: [],
  playVideo: null,
  onSubmitHandler: (key) => {} 
 });

 export const AuthContextProvider = (props) => {
const [searchKey, setSearchKey] = useState('')
  const [searchResult, setSearchResult] = useState('');
  const [video, setVideo] = useState(null);

  const options = {
    part:"snippet",
    key:YouTube_API_KEY,
    maxResults:15,
    q:searchKey,
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
const onSubmitHandler  = (key) => {
 
  setSearchKey(key);
  requestSearch();
 

};

const playVideo  = (video) => {
 setVideo (video)

};
   return (

     <AuthContext.Provider
       value={{
         searchKey: searchKey,
         searchResult: searchResult,
         onSubmitHandler: onSubmitHandler ,
         playVideo: playVideo,
         video: video
       }}
     >
       {props.children}
     </AuthContext.Provider>
   );
 };

 export default AuthContext;