import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {getBook, deleteBook} from "../redux/books/BookSlice";
import Button from "./Btn";

const Book = ({ book }) => {
  const dispatch = useDispatch()

  const boook = {
    completed:10,
    percentage:10,
    action:"Action"
  }

  const sDeleteBook = async () => {
    try {
      await dispatch(deleteBook(book.id))
      await dispatch(getBook());
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="book-container">
      <div className="left-side">
        <div className="bookDetails">
          <h3 className="genre">{boook.action}</h3>
          <h2 className="title">{book.title}</h2>
          <p className="author">{book.author}</p>
        </div>
        <div className="commentPart">
          <button type="button" className="comment" id="comments">Comments</button><span className="span">|</span>
         <Button type="button" id="comments"
          onClick={() => {dispatch(sDeleteBook(book.id))}} 
         >Remove</Button>
          <span className="span">|</span><button type="button" className="edit" id="comments">Edit</button>
        </div>
      </div>

      <div className="progressBar">
        <CircularProgressbar
          value={parseInt(boook.completed, 30)}
        />
        <div className="perc">
          <span>{boook.percentage}%</span>
          <span className="complet">completed</span>
        </div>
      </div>

      <div className="bookRight">
        <h4 className="current">Current Chapter</h4>
        <p className="chapter">Chapters </p>
        <button type="button" className="progress">UPDATE PROGRESS</button>
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
      completed: PropTypes.string.isRequired,
      chapter: PropTypes.string.isRequired,
    }).isRequired,
};

export default Book