import { Fragment } from "react";
import SelectedVideo from "../selectedVideo/SelectedVideo";
import Suggestion from "../selectedVideo/Suggestion";

const PlayVideo = () => {
  return (
    <Fragment>
  <SelectedVideo/>
  <Suggestion/>
  </Fragment>
  );
}
 
export default PlayVideo;