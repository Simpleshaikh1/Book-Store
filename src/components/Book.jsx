import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  return (
    <div >
      <div className="left-side">
        <div className="bookDetails">
          <h5>{book.genre}</h5>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
        <div className="commentPart">
          <button type="button">Comments</button>|
          <button type="button">Remove</button>
          |<button type="button">Edit</button>
        </div>
      </div>

      <div className="progressBar">
        <CircularProgressbar
          value={parseInt(book.completed, 10)}
          text={`${book.completed}`}
        />
      </div>

      <div className="bookRight">
        <h4>Current Chapter</h4>
        <p>{book.chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>


    </div>
  )
};

Book.propTypes = {
    book: PropTypes.shape({
      id: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      chapter: PropTypes.string.isRequired,
      completed: PropTypes.string.isRequired,
    }).isRequired,
};

export default Book