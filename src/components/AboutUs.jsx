import React from 'react'
import aboutImg from "../assets/images/photo.jpeg";
import { FaBookOpen } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
export default function AboutUs() {
  return (
    <div >
        {/* header section of about us page */}
        <section className=' w-full h-[260px] bg-gradient-to-r from-[#e6786a] to-[#a00404] rounded-b-[100px]'>
            <div className='w-full items-center text-center   '> 
                <h1 className='text-white text-3xl mb-3 mx-auto pt-[50px] hover:text-black/90 duration-300'>درباره ما</h1>
                <p className='text-white text-lg hover:text-black/80 animation duration-300'>با ما باشید و از هرنوع کتاب های الکترونیکی و صوتی بهره مند شوید</p>
            </div>
        </section>

        {/* the bottum section */}
        <section className=' w-full flex flex-col md:flex-row gap-10 '>
            <div className='flex flex-col text-center text-black/45 w-120 mt-10 '>
                <h1 className='text-2xl hover:text-black duration-300'>بیوگرافی کتاب خانه ما</h1>
                <p className='text-right ml-10 mr-10  '>
                 اینجا یک فروشگاه انترنتی کتاب است، که میتوایند بیشتر از ۱۰۰۰۰+ کتاب از اینجا دریافت کنید.
                 این کتابخانه آنلاین در سال ۲۰۲۶ توسط عوض علی حیدری ایجاد گردیده و به منظور کمک و همکاری به هموطنان و کسانی که شوق و علاقه شدید به کتاب خوانی دارد از این کتاب خانه جامع بدست بیاورد. 
                 کتاب های این کتابخانه شامل چندین بخش و کتگوری میشود که تمام مردم و از هر نوع کتاب که علاقه دارد را به صورت رایگان دریافت نماید
                 و همچنان بعضی از قوانین وجود دارد که مشتری های گرامی باید مد نظر بگیرند.
                 دریافت نمودن کمی از کتاب به صورت رایگان کامل بدست شما قرار میگیرد. 
                 ولی اگر خواهان کتاب های زیادی هستید و میخواهید کتاب های بیشتر را دریافت کنید به صورت رایگان فقط جستجو کنید و نظر به شرایط همان کتاب عمل نمایید. 
                <h3 className='text-black text-lg'> شرایط کتاب:</h3>
                <ul>
                    <li className='text-red-600 text-lg   ' style={{listStyle: "const {second} = first"}}>
                        دعوت نمودن دوستان تان در این وبسایت و ثبت نام آنها
                        
                    </li>
                    <li className='text-red-600 text-lg   ' style={{listStyle: "const {second} = first"}}>
                        اشتراک گذاری لینک این وبسایت به صفحات مجازی خودتان 
                    </li>
                    <li className='text-red-600 text-lg   ' style={{listStyle: "const {second} = first"}}>
                        اشتراک گذاری کتاب های که قبلا خوانده شده حد اقل به ۱۰ نفر
                    </li>

                </ul>
                 
                </p>
                
            </div>            
            <div>
                <img src={aboutImg} alt="عکس من در کتابخانه" className='w-150 h-[470px] object-cover rounded-3xl mt-10 shadow-lg shadow-black/75'/>
            </div>
        </section>

        {/* the end section */}
        <section className='w-full h-auto bg-red-200 mt-10'>
            <div>
                <h1 className='text-red-700 hover:text-black/80 duration-400  text-3xl text-shadow-lg text-center mt-10 mb-10 pt-10' >ارزش های کتابخانه ما</h1>
            </div>
            
            <div className='flex flex-col md:flex-row justify-between mx-20'>
            <div className='  bg-white m-[10px] w-[300px] h-[250px] rounded-3xl shadow-gray-600/25 shadow-lg hover:bg-black/50 hover:text-white duration-500 hover:-translate-2  '>
                <h2 className='text-2xl text-center mb-5  text-red-700 hover:text-black/85 duration-300 animation  flex-col flex '> 
                <FaBookOpen className='text-center mx-auto my-2'/> دسترسی آسان</h2>
                <p className='mx-[9px]'>در این وبسایت شما میتوانید هر نوع کتاب که ضرورت داشته باشید به بهترین شکل پیدا کنید</p>
            </div>
            <div className=' bg-white m-[10px] w-[300px] h-[250px] rounded-3xl shadow-gray-600/25 shadow-lg hover:bg-black/50 hover:text-white duration-500 hover:-translate-2 '>
                <h2 className='text-2xl text-center mb-5 text-red-700 hover:text-black/85 duration-300 animation '
                ><FaHeadphones className='text-center mx-auto my-2'/>تجربه شنیداری</h2>
                <p className='mx-[9px]'>بیشتر کتاب های صوتی فارسی با تیم مجرب ما روخوانی شده است و به صورت صوتی هم منتشر شده است تا مشتری ای بتواند به صورت آسان و دقیق دسترسی داشته باشد و از کتاب ها استفاده نمایند.</p>
            </div>
            <div className=' bg-white m-[10px] w-[300px] h-[250px] rounded-3xl shadow-gray-600/25 shadow-lg hover:bg-black/50 hover:text-white duration-500 hover:-translate-2 '>
                <h2 className='text-2xl text-center mb-5 text-red-700 hover:text-black/85 duration-300 animation '>
                <MdHighQuality className='text-center mx-auto my-2'/>
                تنوع و کیفیت</h2>
                <p className='mx-[9px]'>ما در اینجا از هر نوع کتاب های از جمله دینی، مذهبی، سیاسی، رمان های عاشقانه، عارفانه، پند آموزی و کودکانه  در دسترس شما خوبان قرار میدهیم.</p>
            </div>
            </div>
        </section>
    </div>
  )
}
