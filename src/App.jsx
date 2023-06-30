import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Categories from './routes/Categories';
import ErrorPage from './routes/Error';
import Home from './routes/Home';
import BookList from './components/BookList';


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Provider>
  );
}

export default App
