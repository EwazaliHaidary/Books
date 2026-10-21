import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Img  from '../assets/images/my photo.jpeg'
export default function Contact() {

  return (
    <div className='bg-[#f7efef]'>
        <Header/>
        {/* header of Contact us */}
        
        <section 
          dir='ltr'
          className='bg-gradient-to-r from-[#e6786a] to-[#a00404] 
            w-full h-[260px] rounded-b-[100px]  shadow-black/60 shadow-lg '>
          <div className='items-center justify-center w-full flex flex-col'>
            <h1 className=' text-white text-4xl hover:text-black/500  
            transform transition-all duration-500  text-shadow-emerald-50 py-6 hover:-translate-2.5    '
            >با ما به تماس شوید</h1>
            <p className=' text-black text-lg hover:text-white/90  
            transform transition-all duration-500  text-shadow-emerald-50 hover:-translate-2.5   '>نظریات تان را با ما شریک سازید</p>
          </div>
        </section>

        {/* second section and forms  */}

        <section className='flex flex-col md:flex-row gap-10 max-w-6xl   '>

          <div className='  max-w-md m-10 my-20'>
           <img src={Img} alt="عکس من"  className='shadow-black/60 shadow-lg w-full h-[800px] object-cover rounded-2xl   '/>
          </div>

          <div className=' flex-1 flex-col  m-10'>

            <form className='shadow-black/60 shadow-lg bg-white w-110 h-130 my-10 left-20 rounded-2xl ml-[30px] flex flex-col flex-1'>
              <h1 className='text-2xl text-black/70 mx-auto text-center p-10'>با ما در ارتباط باشید...</h1>
              <label htmlFor="name" className='w-80 px-5 py-2 mx-10 text-lg '>نام تکمیل</label>
              <input type="text" id='name' placeholder='نام تکمیل تان را وارد کنید'
                className='w-80 px-5 py-2 mx-10  border-gray-300 border-1 rounded-full mb-3'
              />
              <label htmlFor="email" className='w-80 px-5 py-2 mx-10'>ایمیل</label>
              <input type="email" id='email' placeholder='example@gmail.com'
                className='w-80 px-5 py-2 mx-10 border-gray-300 border-1 rounded-full mb-3'
              />
              <label htmlFor="message" className='w-80 px-5 py-2 mx-10'>پیام</label>
              <textarea name="" id="message" placeholder='پیام خود را بنویسید...'
                className='w-80 px-5 py-2 mx-10   border-gray-300 border-1 rounded-4xl' rows={6}
              ></textarea>
              <button className='bg-gradient-to-r from-[#d34e4e] to-[#ad0404] w-50 mr-30 rounded-full mt-4 text-white shadow-lg shadow-gray-600 mb-10 hover:translate-y-1 transition-discrete duration-300'>ارسال</button>
            </form>

            <div className='bg-white w-110 rounded-2xl  flex flex-col p-2 text-xl h-50 shadow-black/60 shadow-lg'>
            <h1 className='text-center m-3 text-gray-700 hover:text-gray-950 cursor-point transition-all transform delay-300'>درباره من...</h1>
            <h1 className=' mr-2  text-gray-700 hover:text-gray-950 cursor-point transition-all transform delay-300'>نام: عوض علی</h1>
            <h1 className=' mr-2  text-gray-700 hover:text-gray-950 cursor-point transition-all transform delay-300'>تخلص: حیدری</h1>
            <h1 className=' mr-2  text-gray-700 hover:text-gray-950 cursor-point transition-all transform delay-300'>ایمیل: ewazalihaidary5@gmail.com</h1>
            </div>
          </div>

        </section>
    </div>
  )
}
