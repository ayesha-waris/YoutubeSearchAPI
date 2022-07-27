import { Col, Row } from 'react-bootstrap'
import classes from './SelectedVideo.module.css';


import { useContext} from 'react';
import AuthContext from '../store/search-auth';
import { useParams } from 'react-router-dom';
const SelectedVideo = () => {

  const ctx = useContext(AuthContext);
 const params = useParams();
 
 

  const video = ctx.searchResult.find(
    (video) => video.id.videoId === params.id
  );
 
  
     return (
      
        <Row>
           <Col lg={6}>
              <div className={classes.video}>
                 <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder='0'
                    title={video?.snippet?.title}
                    allowFullScreen
                    width='100%'
                    height='100%'></iframe>
                     <h1>{video?.snippet?.title }</h1>
              </div>
              
             
            </Col>
            
        </Row>
        
     )
}
 
export default SelectedVideo;