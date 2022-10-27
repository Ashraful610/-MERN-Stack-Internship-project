import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
     <div className='d-flex justify-content-between align-items-center px-5 py-3  '>
         {/* -------------- logo div ----------- */}
         <div>
             <img src='https://i.ibb.co/mFjdBvX/ATG-LOGO-removebg-preview.png' className='logo' alt='Across The Globe logo' />
          </div>
          {/* ----------- search input field div ---------- */}
          <div className='input-div'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search-icons">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
           </svg>
            <input type="text" placeholder='Search for your favorite groups in ATG' className='search-field ' />
          </div>
          {/* ------------- create a account text div --------------- */}
          <div className='create-account-div'>
             <h2>Create account. <span> It’s free!</span> </h2>
          </div>
     </div>
    );
};

export default Navbar;