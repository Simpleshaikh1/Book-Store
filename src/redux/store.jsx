import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import BookSlice from "./books/BookSlice";

const store = configureStore({
    reducer: {
      bookStore:BookSlice,
      category: categoriesSlice,
    },
});

export default store;