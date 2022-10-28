import React from 'react';
import Post1 from '../Shared/Post1/Post1';
import Post2 from '../Shared/Post2/Post2';
import Post3 from '../Shared/Post3/Post3';
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
              </div>
                {/* ------- sidebar div ----------- */}
                <div className='sidebar-div'>

                </div>
           </div>
        </div>
    );
};

export default MainContentPage;