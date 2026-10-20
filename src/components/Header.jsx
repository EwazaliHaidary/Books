import React from 'react';
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
const Header = () => {
    return (
       <>
        <header className='shadow-sm  flex justify-between py-2 px-2 items-center'> 
            {/*logo*/}
            <div className='flex items-center gap-3' >
                <img src={logo}alt="logo" className='w-[80px] h-[100px] p-2  mr-3 object-cover' />
            </div>
            <div className='hidden md:block relative w-80 max-4'>
                <input type="search"
                    placeholder='اسم کتاب را بنویسید'
                    className=' text-black-400 w-full rounded-xl border-[1px]
                     focus:text-red-500 focus-within:rounded-xl  p-1'
                />
                <IoSearch className='absolute left-5 top-[7px] '/>
            </div>

            <div className='hidden  md:flex text-black-400 items-center gap-8 ' >
                <Link to ={"/"} className=' text-shadow-black hover:text-red-500
                 transition translate-2.5
                  hover:transition' >خانه
                  </Link>
                <Link to ={"/contact"} className=' text-shadow-black hover:text-red-500
                 transition translate-2.5
                  hover:transition' >ارتباط با ما
                  </Link>
                <Link to ={"/about"} className=' text-shadow-black hover:text-red-500
                 transition translate-2.5
                  hover:transition' >درباه ما
                  </Link>
                <Link to ={"/setting"} className=' text-shadow-black hover:text-red-500
                 transition translate-2.5
                  hover:transition' >تنظیمات
                  </Link>

                    <button className=' text-3xl text-red-500'>
                         <TiShoppingCart/>
                         <span className='text-[20px]'>0</span>
                    </button>
            </div>
          
        </header>
       </>
    );
}

export default Header;
