import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

const Content = (props) => {
  const searchResult = props.searchResult;

  const playVideo = (videoId,e) => {
    
    
  }
  // axios({
  //   method: "get",
  //   url: `https://www.googleapis.com/youtube/v3/search`,
  //   params: {
  //     api_key: YouTube_API_KEY,
  //     q: keyword,
  //     maxResults: 5
  //   },
  // }).then((response) => {
  //   console.log(response.data);
  // });

  return (
    <>
      <div className="content">
        {searchResult.map((result, num) => (
          <div key={num} onClick={ () =>{
            playVideo(result.id.videoId) } }>
            <div className="details">
              <div className="thumbnail">
                <img src={result.snippet.thumbnails.default.url} alt="" />
              </div>

              <div className="title">
                <h3>{result.snippet.title}</h3>
                <span> 2M Views • {result.snippet.publishedAt} </span>
                <div className="author">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
