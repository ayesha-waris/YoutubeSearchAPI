const Video = (id) => {
  return ( 
    <div className="video">
      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
   );
}
 
export default Video;