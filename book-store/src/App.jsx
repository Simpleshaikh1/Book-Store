import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Categories from './routes/Categories';
import ErrorPage from './routes/Error';


function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
          <Route index element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
   
  );
}

export default App
