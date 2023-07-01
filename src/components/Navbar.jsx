import { Link, Outlet } from "react-router-dom";
import { HiOutlineUserCircle } from 'react-icons/hi';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navLeft">
          <h1>Bookstore CMS</h1>
          <nav>
            <ul className="ul">
              <li className=".link">
                <Link to={'/'} className="lis">Books</Link>
              </li>
              <li className=".link">
                <Link to={'categories'} className="lis">Categories</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navRight">
          <HiOutlineUserCircle />
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;