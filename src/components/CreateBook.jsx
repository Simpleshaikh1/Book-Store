import { useState } from "react";
import { addBooks } from "../redux/books/BookSlice";
import { useDispatch } from "react-redux";

const CreateBook = () => {
  const dispatch = useDispatch();
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor ] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if(title || author){
      dispatch(addBooks([title, author]));
      setTitle("");
      setAuthor("");
    }else{
      return;
    }
  }

  return(
    <div className="container">
        <h1>ADD NEW BOOK</h1>
        <form className="form">
          <input type="text"
           title={title}
           placeholder="Book title"
           onChange={(e) => setTitle(e.target.value)} 
          />
          <input type="text"
           title={author}
           placeholder="Book author"
           onChange={(e) => setAuthor(e.target.value)} 
           />
           <button className="addBookBtn" type="submit" onClick={submit}>
              ADD BOOK
           </button>
        </form>
    </div>
  )
}

export default CreateBook;