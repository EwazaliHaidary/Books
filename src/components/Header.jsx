
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { TiShoppingCart } from 'react-icons/ti';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  const navLinks = [
    { to: '/', label: 'خانه' },
    { to: '/contact', label: 'ارتباط با ما' },
    { to: '/about', label: 'درباره ما' },
    { to: '/setting', label: 'تنظیمات' },
  ];

  return (
    <>
      <header className="relative z-50 flex items-center justify-between gap-3 bg-white px-3 py-2 shadow-sm sm:px-5">

        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="لوگوی کتاب‌فروشی"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />
        </Link>

        {/* Search: desktop */}
        <div className="relative hidden w-full max-w-sm md:block">
          <input
            type="search"
            placeholder="اسم کتاب را بنویسید"
            dir="rtl"
            className="w-full rounded-xl border border-gray-300 p-2 pl-10 text-gray-800 outline-none focus:border-red-500"
          />
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 text-gray-700 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap transition-colors hover:text-red-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label="سبد خرید"
            className="relative text-3xl text-red-500"
          >
            <TiShoppingCart />
            <span className="absolute -right-2 -top-1 text-xs">
              0
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="text-3xl text-red-500 md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
           
          >
            {isMobileOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <button
          type="button"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        dir="rtl"
        className={`fixed right-0 top-0 z-50 h-dvh w-80 max-w-[85vw] bg-white p-5 shadow-xl transition-transform duration-300 md:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            منوی کتاب‌فروشی
          </span>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="text-2xl text-red-500"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Search: mobile */}
        <div className="relative mb-6">
          <input
            type="search"
            placeholder="اسم کتاب را بنویسید"
            className="w-full rounded-xl border border-gray-300 p-2 pl-10 outline-none focus:border-red-500"
          />
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
        </div>

        <nav className="flex flex-col gap-2 ">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMobileMenu}
              className="rounded-lg  border-b-[1px] border-black/40
                px-3 py-3 text-gray-700 transition-colors
                hover:bg-red-50 hover:text-red-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Cart panel */}
      {isCartOpen && (
        <div
          dir="rtl"
          className="absolute  h-full left-0 top-20 z-[60] w-72 max-w-[90vw] rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold">سبد خرید</h2>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              aria-label="بستن سبد خرید"
              className="text-xl"
            >
              <RxCross2 />
            </button>
          </div>
          <div></div>
          <div className='flex justify-between my-[40px] border-t-2 p-2 border-black/8'> 
          <button className='flex text-white rounded-full px-3 py-1 
              bg-gradient-to-r from-[#e24d4d] to-[#f10c0c] ' >قیمت کل</button>
          
          <p className="text-sm text-gray-500 flex">
            سبد خرید شما خالی است. 
          </p>
         </div>
        </div>
      )}
    </>
  );
};

export default Header;
