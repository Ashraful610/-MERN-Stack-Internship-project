import React from 'react';

const Post2 = () => {
    return (
     <div className='post-div'>
        <img src="https://i.ibb.co/0tRhkkJ/Rectangle-5-1.png" alt="" />
        {/* ----------- post details div ----------- */}
        <div className='post-details-div'>
            {/*------------ post type div ------------- */}
            <div className='post-type-div d-flex d-inline-block'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
               </svg>
               <h3>Education</h3>
            </div>
           {/* ------- post title div ------- */}
           <div className='post-title-div d-flex justify-content-between '>
               <h2>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h2>
               <img src="https://i.ibb.co/qr2110m/Vector-2.png" alt="" />
           </div>
           <h4>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h4>
           {/* --------- post user details div ---------- */}
           <div className='d-flex justify-content-between'>
               {/* ---------- user img and name ------------ */}
                <div className='user-div d-flex align-items-center'>
                   <img src="https://i.ibb.co/WtywPbT/Rectangle-3-2.png" alt="" />
                   <h2>Sarah West</h2>
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

export default Post2;