import React from 'react';
import Post1 from '../Shared/Post1/Post1';
import Post2 from '../Shared/Post2/Post2';
import Post3 from '../Shared/Post3/Post3';
import Post4 from '../Shared/Post4/Post4';
import './MainContentPage.css'

const MainContentPage = () => {
    return (
        <div className='w-75 min-vh-100 my-5  mx-auto'>
           {/* ------- different route and post , join group button div ------------ */}
           <div className='d-flex justify-content-between pb-2 border-bottom'>
               {/* ---------- dfifferent route div ------------ */}
              <div>
                <a href="" alt='' className='route active'>All Posts (32)</a>
                <a href="" alt='' className='route'>Article</a>
                <a href="" alt='' className='route'>Event</a>
                <a href="" alt='' className='route'>Education</a>
                <a href="" alt='' className='route'>Job</a>
              </div>
               {/* ------------------ post and join group button div ------------ */}
               <div className='d-flex'>
                  <button className='post-button'>
                     Write a Post
                     <img src="https://i.ibb.co/WGF14v9/Vector-1.png" alt="" />
                  </button>
                  <button className='join-button'>
                     <img src="https://i.ibb.co/TRQZzg4/Vector.png" alt="" />
                     Join Group
                  </button>
               </div>
           </div>
           {/* -------- main content div ------------- */}
           <div className='d-flex mt-3 gap-2'>
              {/* ------- all post div -------- */}
              <div className='all-post-div'>
                 <Post1/>
                 <Post2/>
                 <Post3/>
                 <Post4/>
              </div>
                {/* ------- sidebar div ----------- */}
                <div className='sidebar-div px-5 py-3'>
                  <div className='d-flex justify-content-between  border-bottom border-2'>
                     <div className='location-div  d-flex d-inline-block'>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                       </svg>
                       <h3>Noida, India</h3>
                     </div>
                     {/* ------- edit pencil ---------- */}
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="edit-svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                     </svg>
                  </div>
                  <div className='location d-flex align-items-start py-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                   </svg>
                    <h3>Your location will help us serve better <br /> and extend a personalised experience.</h3>
                  </div>
                </div>
           </div>
        </div>
    );
};

export default MainContentPage;