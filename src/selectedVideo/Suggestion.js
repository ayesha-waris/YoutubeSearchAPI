import AuthContext from '../store/search-auth';
import classes from './Suggestion.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Suggestion = () => {
  const context = useContext(AuthContext);

  const videos = context.searchResult.filter(
    (video) => video.id.videoId !== context.video.id.videoId
  );

  return (
    <div className={classes.suggestion}>
       
      <div className={classes.content}>
        {videos.map((result, num) => (
          <Link key={num}  to={`/video/${result.id.videoId}`}> 
          <div className={classes.details}>
            <div className={classes.thumbnail}>
              <img src={result.snippet.thumbnails.default.url} alt="" />
            </div>

            <div className={classes.title}>
              <h3>{result.snippet.title}</h3>
              <span> 2M Views • {result.snippet.publishedAt} </span>
              <div className={classes.author}>
              
               
                  {result.snippet.channelTitle}
              
              </div>
            </div>
            
          </div>
          </Link>
        ))}
      </div>
     
    </div>
  );
};

export default Suggestion;
