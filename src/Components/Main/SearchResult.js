import classes  from './SearchResult.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Main from './Main';
import AuthContext from '../../store/search-auth';

const SearchResult = (searchResult) => {

  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const render = ctx.searchResult.length>0? true: false ;
 console.log(ctx.searchResult);
  const clickHandler = (video) => {
    ctx.playVideo(video);
    navigate(`/video/${video.id.videoId}`);
  }
  return (

    <Main> 
      { render &&  <div className={classes.content}>
        {ctx.searchResult.map((result, num) => (
         
            <div onClick = {() => {clickHandler(result)}} key={num} className={classes.details}>
              <div className={classes.thumbnail}>
                <img src={result.snippet.thumbnails.default.url} alt="" />
              </div>

              <div className={classes.title}>
                <h3>{result.snippet.title}</h3>
                <span> 2M Views • {result.snippet.publishedAt} </span>
                <div className={classes.author}>
                  <img
                    src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                  <Link
                    to={`https://www.youtube.com/channel/ ${result.snippet.channelId}`}
                  >
                    {result.snippet.channelTitle}
                  </Link>
                </div>
              </div>
            </div>
      
        ))}
      </div> }
     
      </Main>
  );
};

export default SearchResult;
