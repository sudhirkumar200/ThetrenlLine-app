import React from 'react'

const News = () => {
  return (
    <div>
      <div className='bg-white p-4 px-0'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-3'>
                <h1 className='text-[20px] md:text-[40px] font-bold '>Want to Learn with Us ?</h1>
                <p>Join with Us from click Here.. </p>
            </div>
            <div className='m-3'>
                <input type="text" className='p-3 mr-2 bg-white border border-black text-slate-800 rounded' placeholder='Email'/>
                <button className='bg-black text-white p-3 rounded m-2 hover:scale-110 duration-[400ms]'>Get Started</button>  
                <br/>
                <p className='text-blue-700'> 
                We care about your<br/>
                <a href=" " className='text-black font-bold'>Privacy Policy...</a> 
                </p>                                    
            </div>
            
        </div>
      </div>
      <hr className='shadow'/>
    </div>
  )
}

export default News
