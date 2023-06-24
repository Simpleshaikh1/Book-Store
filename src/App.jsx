import './App.css'
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Categories from './routes/Categories';
import ErrorPage from './routes/Error';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
        <Route index element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App
