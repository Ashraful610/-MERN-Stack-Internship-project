import React from 'react';

const Post3 = () => {
    return (
  <div className='post-div'>
        <img src="https://i.ibb.co/9p5pvcY/Rectangle-5-2.png" alt="" />
        {/* ----------- post details div ----------- */}
        <div className='post-details-div'>
            {/*------------ post type div ------------- */}
            <div className='post-type-div d-flex d-inline-block'>
               <h3>Meetup</h3>
            </div>
           {/* ------- post title div ------- */}
           <div className='post-title-div d-flex justify-content-between '>
               <h2>Finance & Investment Elite Social Mixer @Lujiazui</h2>
               <img src="https://i.ibb.co/qr2110m/Vector-2.png" alt="" />
           </div>
            {/* ---------- date and location div ---------- */}
            <div className='d-flex'>
                {/* --------- date div --------- */}
                <div className='date-div d-flex d-inline-block align-items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                 </svg>
                  <h3>Fri, 12 Oct, 2018</h3>
                </div>
                {/* ------------- location div ---------- */}
                <div className='location-div d-flex d-inline-block ms-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                    <h3>Ahmedabad, India</h3>
                </div>
            </div>
            {/* ---------- visit website button ---------- */}
            <button className='visit-website mt-2 mb-4'>Visit Website</button>
           {/* --------- post user details div ---------- */}
           <div className='d-flex justify-content-between'>
               {/* ---------- user img and name ------------ */}
                <div className='user-div d-flex align-items-center'>
                   <img src="https://i.ibb.co/vQmqYhH/Rectangle-3-3.png" alt="" />
                   <h2>Ronal Jones</h2>
                </div>
                {/* ------ share button and views div --------- */}
                <div className='d-flex align-items-center'>
                   {/* -------- views div ----------- */}
                   <div className='views-div d-flex align-items-center d-inline-block'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                       <h2>1.4k views</h2>
                   </div>
                   {/* ------- share button div  ---------- */}
                   <div className='share-button-div d-flex justify-content-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                   </div>

                </div>
           </div>
        </div>
   </div>
    );
};

export default Post3;