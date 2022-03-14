

 
import { useState } from 'react';
import Image from 'next/image';
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineRestaurantMenu} from "react-icons/md"

const navbarList = [
    {name: "home", url: "#home"},
    {name: "about", url: "#about"},
    {name: "menu", url: "#menu"},
    {name: "awards", url: "#awards"},
    {name: "contact", url: "#contact"},
]

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='bg-black-color'>
            <div className="  flex items-center justify-between py-2 px-6 xl:container mx-auto">
                <div className=' relative w-[120px] lg:w-[170px] aspect-[16/6]'>
                    <Image src="/gericht.png" objectFit='contain'  layout='fill' quality={100} />
                </div>
                <ul className=' hidden md:flex items-center flex-1 justify-center gap-8'>
                    {navbarList.map((item, index) => {
                        return (
                            <li key={index}><a className='text-white lg:text-[16px] capitalize hover:text-grey-color' href={`${item.url}`}>{item.name}</a></li>
                        )
                    })}
                </ul>
                <div className='hidden sm:flex items-center divide-x-[1px] divide-grey-color text-sm lg:text-[16px]'>
                    <div className="text-white hover:border-b border-golden-color mr-2">
                        <a className='text-white' href="">Log In / Registration</a> 
                    </div>
                    <div className='pl-2 hover:border-b border-golden-color'>
                        <a className='text-white' href="">Book Table</a>
                    </div>
                </div>
                <div onClick={() => setToggle(true)} className = "text-white md:hidden  justify-end">
                    <GiHamburgerMenu size={"1.7rem"} />
                </div>
                <div
                    style={{height: toggle ? "100vh" : "0"}}
                    className=' fixed top-0 z-[1] left-0 transition-all duration-300 ease-out right-0 overflow-hidden bg-black-color flex flex-col'>
                    <div onClick={() => setToggle(false)} className='text-golden-color flex justify-end pr-4 pt-4'>
                        <MdOutlineRestaurantMenu size={"1.7rem"} />
                    </div>
                    <ul className='flex-1 grid place-content-center gap-8 text-center text-3xl '>
                        {navbarList.map((item, index) => {
                            return (
                            <li key={index} onClick={() => setToggle(false)}  ><a className='text-golden-color font-base hover:text-grey-color  capitalize  tracking-wider' href={`${item.url}`}>{item.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;