import { useState } from 'react';
import { IoStarOutline, IoStar } from "react-icons/io5";

function Comment({Details}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingText, setRatingText] = useState('');
  const [comment, setComment] = useState('');
  const numberRating= [1,2,3,4,5];
  // the handleRating function is called when the user clicks on a star to rate the recipe. It sets the rating state to the index of the star that was clicked with different messages for each rating.
  const handleRating = (index) => {
    setRating(index);
    
    switch(index) {
      case 1:
        setRatingText("Couldn't eat it");
        break;
      case 2:
        setRatingText("Didn't like it");
        break;
      case 3:
        setRatingText("It was okay");
        break;
      case 4:
        setRatingText("Liked it");
        break;
      case 5:
        setRatingText("Loved it");
        break;
      default:
        setRatingText('');
    }
  };
  // the handleCommentChange function is called when the user types in the comment box..
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <section className='reviews'>
        <h3>Reviews</h3>
        {Details && (
          <div className="reviews-layout">
            <img src={Details.imageUrl} alt="" width={50} />
            <h4>{Details.name}</h4>
            <p>My Rating <span>(required)</span></p>
            <div className="rating">
              {numberRating.map((index) => (
                <span
                  key={index}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => handleRating(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* the rating stars are rendered using the IoStar and IoStarOutline icons from the react-icons library. The color of the stars is set to yellow using the color prop. */}
                  {index <= (hover || rating) ? (
                    <IoStar fontSize={40} color="#FFD700" />
                  ) : (
                    <IoStarOutline fontSize={40} />
                  )}
                </span>
              ))}
            </div>
            {ratingText && <p className="rating-feedback">{ratingText}</p>}
            <textarea 
              value={comment}
              onChange={handleCommentChange}
              placeholder='What did you think about this recipe ?' 
              name="comment" 
              id="comment-field"  
              style={{border: "1px solid black", padding: "30px"}}
            />
            <div className="submit-buttons">
              {/* the submit button is disabled if the comment field is empty */}
              <button disabled={!comment.trim()} style={{ opacity: !comment.trim() ? 0.5 : 1 }}>CANCEL</button>
              <button disabled={!comment.trim()} style={{ opacity: !comment.trim() ? 0.5 : 1 }}>
                SUBMIT
              </button>
            </div>
          </div>        
        )}     
      </section>
    </>
  );
}

export default Comment;