import React, { useState } from 'react';

 const AuthContext = React.createContext({
  searchKey: '',
  onSubmitHandler: (key) => {} 
 });

 export const AuthContextProvider = (props) => {
const [searchKey, setSearchKey] = useState('')

const onSubmitHandler  = (key) => {
  console.log(key);
  setSearchKey(key);
};
   return (

     <AuthContext.Provider
       value={{
         searchKey: searchKey,
         onSubmitHandler: onSubmitHandler 
       }}
     >
       {props.children}
     </AuthContext.Provider>
   );
 };

 export default AuthContext;