'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
    HiOutlineMenu as MenuIcon,
    HiOutlineX as CloseIcon,
    HiOutlineArrowSmUp as ChevronUpIcon,
    HiVolumeOff,
    HiVolumeUp,
    HiSun,
    HiMoon,
} from 'react-icons/hi'
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Header = () => {
    const [showButton, setShowButton] = useState(false);
    const onScroll = () => {
        window.scrollY > 10 ? setShowButton(true) : setShowButton(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    
    return (

        <>

            <div className="absolute" id="start" />

            <header className={`hidden lg:block rounded-full  py-2  sticky top-0  z-50 w-full`} >
                <nav className="h-full w-full flex justify-between rounded-full p-2 items-center max-w-[1250px] px-3  sm:px-6 md:px-12 mx-auto">
                    <Link href="/"  className="  shadow-2xl bg-box flex items-center gap-6  rounded-full p-2 ">
                        <Image
                            src="/assets/images/logo.png"
                            alt="logo"
                            width={60}
                            height={60}
                        />
                    </Link>
                    <ul  className="flex flex-wrap gap-3   p-2 rounded-full align-center ">
                        <li onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
                            <div className={`py-2 capitalize px-2 rounded-full flex gap-2 justify-center items-center select-none text-base  cursor-pointer outline-none text-title  border-transparent transition-all bg-highlight hover:bg-primary hover:text-white `} >
                                <span className='text-3xl'>
                                    {currentTheme == 'light' ? <HiMoon /> : <HiSun />}
                                </span>
                            </div>
                        </li>

                    </ul>


                </nav>
            </header>

            <header className={`z-[60] top-0 left-0 right-0 bottom-0 fixed lg:hidden bg-paper  h-full w-full transition ${drawerOpen ? "-translate-x-0" : "-translate-x-full"}`}>
                <nav className="h-full w-full flex flex-col justify-between items-center px-6">

                    <button onClick={handleDrawerToggle} className="absolute text-3xl  top-6 right-6 text-title p-1.5 rounded-2xl">
                        <CloseIcon />
                    </button>

                    <ul className="my-8 mt-6 ml-2 flex-grow flex flex-col align-center w-full " onClick={handleDrawerToggle}>
                        <div className='flex items-start'>
                            <Link href="/"  className="  shadow-2xl bg-box flex items-center gap-6  rounded-full p-2 ">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                />
                            </Link>
                        </div>
                        <div className='flex-grow' />
                        <div className=' flex items-start  px-4 gap-2'>

                            <li className='flex-shrink-0' onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}>
                                <div className={`py-2 capitalize px-2 rounded-full flex gap-2 justify-center items-center select-none text-base  cursor-pointer outline-none   border-transparent transition-all  bg-primary text-white `} >
                                    <span className='text-3xl'>
                                        {currentTheme == 'light' ? <HiMoon /> : <HiSun />}
                                    </span>
                                </div>
                            </li>
                        </div>

                    </ul>

                </nav>

            </header>


            <div className='flex lg:flex-col-reverse fixed  left-6 lg:bottom-6 lg:left-auto lg:top-auto gap-2 top-6 lg:right-6 z-[50] '>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={handleDrawerToggle} className={`text-3xl lg:hidden bg-primary  text-white p-2 rounded-full  z-30`}>
                    <MenuIcon />
                </motion.button>

                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
                    onClick={() => document.getElementById("start").scrollIntoView({ block: "center", behavior: "smooth" })} className={`hover:scale-110  cursor-pointer transition-all duration-300 left-6 bottom-6 z-50 shadow-2xl text-3xl outline-none ${showButton ? 'scale-100' : 'scale-0'}  bg-primary font-medium rounded-full p-2  text-white `}>
                    <ChevronUpIcon />

                </motion.button>
            </div>

        </>

    )
}

export default Header