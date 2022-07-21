import React, { useState } from 'react';
import axios from 'axios';
const YouTube_API_KEY = "AIzaSyBNuCk59QmbF3kLy9hMNurSQ-2flguVpBw" ;
const URL ="https://www.googleapis.com/youtube/v3/search";


 const AuthContext = React.createContext({
  searchKey: '',
  searchResult: [],
  onSubmitHandler: (key) => {} 
 });

 export const AuthContextProvider = (props) => {
const [searchKey, setSearchKey] = useState('')
  const [searchResult, setSearchResult] = useState('');

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
  console.log(searchKey);
  setSearchKey(key);
  requestSearch();

};
   return (

     <AuthContext.Provider
       value={{
         searchKey: searchKey,
         searchResult: searchResult,
         onSubmitHandler: onSubmitHandler 
       }}
     >
       {props.children}
     </AuthContext.Provider>
   );
 };

 export default AuthContext;