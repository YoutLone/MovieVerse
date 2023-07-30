import '../styles/NavBar.css';
import { Outlet } from 'react-router-dom';
import { FaMicrophone, FaSun } from 'react-icons/fa';

const NavBar = () => (
  <>
    <header className="header">
      <div className="logo">
        <img src="\assets\movie.jpg" alt="logo" />
        <h1>MovieVerse</h1>
      </div>
      <div className="container">
        <ul>
          <li>
            <FaMicrophone />
          </li>
          <li>
            <FaSun />
          </li>
        </ul>
      </div>
    </header>
    <Outlet />
  </>
);

export default NavBar;
