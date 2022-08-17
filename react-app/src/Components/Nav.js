import React, { useRef, useState } from 'react'

export default function Nav() {
  const [firstBtn, setfirstBtn] = useState('')
  const [secondBtn, setsecondBtn] = useState('')
  const [navBtn, setnavBtn] = useState(false)

  const firstbtnClick = (e)=>{

    if(firstBtn===''){
      setfirstBtn('h-60')
      e.target.nextSibling.classList.remove('hidden')
      // console.log(true)
    }else{
      setfirstBtn('')
      // console.log(false)
      e.target.nextSibling.classList.add('hidden')
    } 
  }


  const secondbtnClick = (e)=>{

    if(secondBtn===''){
      setsecondBtn('h-38')
      // console.log(true)
      e.target.nextSibling.classList.remove('hidden')
      
    }
    else{
      setsecondBtn('')
      // console.log(false)
      e.target.nextSibling.classList.add('hidden')
    } 
  }

  const leftnav = useRef(null)
  const rightnav = useRef(null)
  const addmarginb = useRef(null)

  const navbarBtn = (e)=>{

    // console.log(e.target.parentElement)
    if(navBtn){
      leftnav.current.classList.add('hidden')
      rightnav.current.classList.add('hidden')
      setnavBtn(false)
      
    }else{
      leftnav.current.classList.remove('hidden')
      rightnav.current.classList.remove('hidden')
      setnavBtn(true)

    }
  }

  return (
    <> 
    <nav className=''>
      <div className='flex flex-row-reverse md:flex-row px-4 py-4 justify-between h-10 md:h-20 '>

        {/* button */}
        <button onClick={(e)=>{navbarBtn(e)}} type="button" className="inline-flex z-10 justify-center relative items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6  absolute md:static  top-0 right-0" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>

        {/* <h1 className='md:hidden text-2xl mr-8' >snap</h1> */}

        <h1 className='text-2xl mr-8 fixed left-3 md:static font-bold mt-2'>snap</h1>
        <div ref={leftnav} className='flex-wrap hidden  md:flex flex-col md:flex-row    bg-white md:bg-white h-[54rem] w-3/6  md:w-auto md:h-auto absolute top-0 right-0 md:static'>
        {/* <div className='flex items-center'>  absolute top-24 md:static*/}
        

        <ul ref={addmarginb} className='flex flex-col md:flex-row md:items-center md:space-x-6 ml-10 md:ml-0 mt-20 md:mt-0 ' >
          {/* Dropdown Menu Start */}
          <li  className='flex flex-col  md:items-center relative '>
            <a href="#" onClick={(e)=>{firstbtnClick(e)}} className=' flex items-center mr-2 text-gray-500 hover:text-black'>Features<svg width="10" height="6" className='ml-3' xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg></a>
            <div className='hidden md:absolute top-8 static right-0  px-3 py-1 w-32 rounded-xl bg-white drop-shadow-lg'>
            <ul>
              <li className='flex items-center py-1'>
              <svg className='w-4 h-4 mr-3' xmlns="http://www.w3.org/2000/svg"><path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/></svg><a className='text-gray-500 hover:text-black' href="#">Todo List</a>
              </li>
              <li className='flex items-center py-1'>
              <svg className='w-4 h-4 mr-3' xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/></svg> <a className='text-gray-500 hover:text-black' href="#">Calender</a>
              </li>
              <li className='flex items-center py-1'>
              <svg className='w-4 h-4 mr-3' xmlns="http://www.w3.org/2000/svg"><path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/></svg><a className='text-gray-500 hover:text-black' href="#">Reminder</a>
              </li>
              <li className='flex items-center py-1'>
              <svg className='w-4 h-4 mr-3' xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/></svg><a className='text-gray-500 hover:text-black' href="#">Planing</a>
              </li>
            </ul>
            </div>
          </li>
          {/* Dropdown Menu end */}

          {/* Dropdown Menu Start */}
          <li onClick={(e)=>{secondbtnClick(e)}} className='flex flex-col relative md:items-center  '>
            <a href="#" className='flex items-center float-left mr-2 text-gray-500 hover:text-black'>Company<svg width="10" height="6" className='ml-3' xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg></a>
            <div className='hidden static md:absolute  top-8 left-0 px-4 py-1 w-28 rounded-xl bg-white drop-shadow-lg'>
            <ul>
              <li className='flex items-center py-1'>
              <a className='text-sm text-gray-500  hover:text-black' href="#">History</a>
              </li>
              <li className='flex items-center py-1'>
               <a className='text-sm text-gray-500 hover:text-black ' href="#">Our Team</a>
              </li>
              <li className='flex items-center py-1'>
              <a className='text-sm text-gray-500 hover:text-black' href="#">Blog</a>
              </li>
            </ul>
            </div>
          </li>
          {/* Dropdown Menu End */}

          <li>
            <a href="#" className='text-gray-500 hover:text-black'>Career</a>
          </li>
          <li>
            <a href="#" className='text-gray-500 hover:text-black'>About</a>
          </li>
        </ul>
        </div>

        
        <div ref={rightnav} className=' flex-wrap hidden  md:flex flex-col md:flex-row w-1/2 md:w-52 items-center    relative top-[18rem] left-[53%] md:static'>
        <ul className='flex flex-col md:flex-row flex-wrap  items-center   space-x-5 mr-8 '>
          <li className='mb-7 md:mb-0 text-center absolue top-56 left-72 md:static'>
            <a href="#" className='text-gray-500 hover:text-black '>Login</a>
          </li>
          <li>
            <button href="#" className=' border-[1.5px] border-gray-500 px-3 py-3 rounded-xl  text-gray-500 hover:text-black hover:border-black'>Register</button>
          </li>
        </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
