import HeroImg from '../assets/images/hero-1.jpg'
export default function Hero() {
  return (
    <div className="flex m-0 p-0">
        {/* image side */}
        <div className=" m-0 w-1/2  h-[400px] bg-cover " style={{backgroundImage : `url(${HeroImg})`}} ></div>

        {/* text side */}
        <div className="w-1/2 bg-[rgb(188,188,188)] overflow:hidden">
            <h1 className='text-4xl mt-20 mr-20 font-semibold'>بیشتر از ۵۰۰۰+ کتاب بدست بیاورید</h1>
            <p className='mt-5 mr-20 text-black/80'>پرفروش ترین کتاب های سال را میتوانید رایگان بدست آورید</p>

            <button className='mt-5 mr-50 px-4 py-2 rounded-full text-lg text-white shadow-black transform transition hover:shadow-md
             bg-gradient-to-r from-[#c04141] to-[#c50505]'>ثبت نام </button>
        </div>
    </div>
  )
}
