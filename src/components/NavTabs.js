import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs whitewords" >
      {/* <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
        

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li> */}
      <li className="nav-item whitewords">
        <a
          href="#about"
          onClick={() => handlePageChange('AboutMe')}
          

          className={currentPage === 'AboutMe' ? 'nav-link active whitewords' : 'nav-link whitewords'}
        >
          About Me
        </a>
      </li>

      
      <li className="nav-item whitewords">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          

          className={currentPage === 'Projects' ? 'nav-link active whitewords' : 'nav-link whitewords'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item whitewords">
        <a
          href="#contact"
          onClick={() => handlePageChange('ContactMe')}
          

          className={currentPage === 'ContactMe' ? 'nav-link active whitewords' : 'nav-link whitewords'}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
