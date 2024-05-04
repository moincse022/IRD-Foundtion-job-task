
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { PiBooksDuotone } from "react-icons/pi";
import { BsBook } from "react-icons/bs";

import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import nav from "../assets/navIcon.png";
import { GoHomeFill } from "react-icons/go";
import { PiBooksFill } from "react-icons/pi";
import { BsBookFill } from "react-icons/bs";
import { IoBookmark } from "react-icons/io5";
import { AiFillAppstore, AiOutlineAppstore } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
const Navbar = () => {
    const [Hovered, setHovered] = useState(false);
    const [Hovered1, setHovered1] = useState(false);
    const [Hovered2, setHovered2] = useState(false);
    const [Hovered3, setHovered3] = useState(false);
    const [Hovered4, setHovered4] = useState(false);

    const navList = (
        <>
            <Link href={'/'}>
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`${Hovered ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {Hovered ?
                        <div className="text-3xl ">
                            <GoHomeFill />
                        </div>
                        :
                        <p className="text-3xl">
                            <GoHome />
                        </p>
                    }
                </div>
            </Link>
            <div className=" ">
                <img src={nav} alt="" className="" />
            </div>
            <Link href={'/'}>
                <div
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                    className={`${Hovered1 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {Hovered1 ?
                        <div className="text-3xl ">
                            < BsBookFill/>
                        </div>
                        :
                        <p className="text-3xl">
                            <BsBook/>
                        </p>
                    }
                </div>
            </Link>
            <Link href={'/'}>
                <div
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                    className={`${Hovered2 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {Hovered2 ?
                        <div className="text-3xl ">
                               <FaBookmark/>
                        
                        </div>
                        :
                        <p className="text-3xl">
                             <FaRegBookmark />
                        </p>
                    }
                </div>
            </Link>
            <Link href={'/'}>
                <div
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                    className={`${Hovered3 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {Hovered3 ?
                        <div className="text-3xl ">
                            <AiFillAppstore/> 
                            
                        </div>
                        :
                        <p className="text-3xl">
                           < AiOutlineAppstore/>
                        </p>
                    }
                </div>
            </Link>
            <Link href={'/'}>
                <div
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}
                    className={`${Hovered4 ? 'hover:text-[#2B9E76]' : 'hover:text-[#2B9E76]'}  hover:bg-[#f8f8f9] p-4 cursor-pointer rounded-lg`}
                >
                    {Hovered4 ?
                        <div className="text-3xl ">
                            <FiSend /> 
                            
                        </div>
                        :
                        <p className="text-3xl">
                           <BsFillSendFill/>
                        </p>
                    }
                </div>
            </Link>
                </>
            );
    return (
        <>
        <div className="hidden lg:block">
            <div className=" flex flex-col w-10 items-center gap-4 mt-8">
                {navList}
            </div>
        </div>
        <div className="block lg:hidden">
            <div className="flex z-30  fixed bottom-0 w-10 items-center gap-4 mt-8">
                {navList}
            </div>
        </div>
        </>
    );
};

export default Navbar;