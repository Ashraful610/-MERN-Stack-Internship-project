import React from 'react';

const Post4 = () => {
    return (
   <div className='four-post-div'>
        <div className='post-details-div'>
            {/*------------ post type div ------------- */}
            <div className='post-type-div d-flex d-inline-block'>
               <img src="https://i.ibb.co/rmCYwJT/Job-4.png" alt="" />
            </div>
           {/* ------- post title div ------- */}
           <div className='post-title-div d-flex justify-content-between '>
               <h2>Software Developer</h2>
               <img src="https://i.ibb.co/qr2110m/Vector-2.png" alt="" />
           </div>
            {/* ---------- date and location div ---------- */}
            <div className='d-flex'>
                {/* --------- date div --------- */}
                <div className='date-div d-flex d-inline-block align-items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  <h3>Innovaccer Analytics Private Ltd.</h3>
                </div>
                {/* ------------- location div ---------- */}
                <div className='location-div d-flex d-inline-block ms-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                    <h3>Noida, India</h3>
                </div>
            </div>
            {/* ---------- visit website button ---------- */}
            <button className='visit-website mt-2 mb-4 text-success'>Apply on Timesjobs</button>
           {/* --------- post user details div ---------- */}
           <div className='d-flex justify-content-between'>
               {/* ---------- user img and name ------------ */}
                <div className='user-div d-flex align-items-center'>
                   <img src="https://i.ibb.co/52PY45w/Rectangle-3-5.png" alt="" />
                   <h2>Joseph Gray</h2>
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

export default Post4;