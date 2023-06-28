import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const storedBooks = () => {
    const storedBooks = localStorage.getItem('data');
    const arrBooks = JSON.parse(storedBooks);

    const bookStorage = [
        {
           id: uuidv4(),
           genre: "Action",
           title: "The Hunger Games",
           author: "Suzanne Collins",
           completed: "64%",
           chapter: "Chapter 17",
        },
        {
            id: uuidv4(),
            genre: "Action",
            title: "Dune",
            author: "Frank Herbert",
            completed: "8%",
            chapter: "Chapter 3: 'Alesson learned'",
        },
        {
            id: uuidv4(),
            genre: "Action",
            title: "Capital in The Twenty-First Century",
            author: "Suzanne Collins",
            completed: "0%",
            chapter: "Introduction",
        },
    ];
    
    if(storedBooks) {
        if(arrBooks.length !== 0) {
            return arrBooks;
        }
        return bookStorage;
    }

    return bookStorage;
};

const initialState = {
    books: storedBooks(),
}

const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers: {
        removeBooks: (state, action) => {
            const bookId = action.payload
            state.books = state.books.filter((book) => book.id !== bookId)
        },

        addBooks: (state, action) => {
            const title = action.payload[0];
            const author = action.payload[1];
            const book = {
                id: uuidv4(),
                title:title,
                author: author,
                category: 'Actions',
                genre: 'Action',
                completed: '30%',
                chapter:'90',
            };

            state.books = [...state.books, book];
        },
    },
});

export const {removeBooks, addBooks} = bookSlice.actions;

export default  bookSlice.reducer;  