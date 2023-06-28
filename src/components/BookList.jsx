import { useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';
import CreateBook from "./CreateBook";
import Book from './Book'
import { useSelector } from "react-redux";


const BookList = () => {
  const books = useSelector((store) => store.bookStore.books);

  const saveBooksToStorage = (items) => {
    localStorage.setItem("booksData", JSON.stringify(items));
  };

    useEffect(() => {
        saveBooksToStorage(books);
    },[books]);

    return (
      <div>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <CreateBook />
      </div>
    );
}

export default BookList;