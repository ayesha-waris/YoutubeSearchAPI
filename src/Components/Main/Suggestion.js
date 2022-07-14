import { Link } from 'react-router-dom';
const Suggestion = () => {
  return ( 
    <div className="suggestion">
      
      <article>
        <div className="details_s">
          <div className="thumbnail_s">
            <img
              src="https://img.youtube.com/vi/zUwB_imVjmg/maxresdefault.jpg"
              alt=""
            />
          </div>

          <div className="title_s">
            <h3>Introverts & Content Creation | Sumudu Siriwardana jvjhvjvjvbbkjbkjbbkjbbj</h3>
            <span> 2M Views • 3 Months Ago </span>
            <div className="author">
              <Link to="/">Francesco Ciulla</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
    
   );
}
 
export default Suggestion;