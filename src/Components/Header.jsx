import React, { useState } from "react";
import navIcon from "../assets/navIcon.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosSettings, IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  const [search, setSearch] = useState(false);
  const [setting, setSetting] = useState(false);
  const [progress,setProgress] = useState(40);
  const [progress1,setProgress1] = useState(25);
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="">
      {/* large device */}
      <div className=" hidden lg:block">
        <div className="flex justify-between">
          {/* first content */}
          <div className="flex justify-start items-center gap-6">
            <div className="">
              <img src={navIcon} alt="navIcon" className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">হাদিস সমূহ</h3>
              <p className="text-sm text-[#404040]">
                হাদিস পড়ুন শিখুন এবং জানুন
              </p>
            </div>
          </div>
          {/* 2nd content */}
          <div className="flex items-center gap-12">
            <div className="">
              <label className="relative bg-[#ECEEF0] rounded-lg">
                <input
                  type="text"
                  className="border-[#DEE1E5] border-2 py-[10px] rounded-lg focus:outline-0 focus:text-black pl-10 pr-6 text-lg placeholder:font-[inherit]"
                  placeholder="Search Hadith"
                />
                <div className="absolute top-0 left-4 text-[#646464] text-lg">
                  <IoSearchOutline></IoSearchOutline>
                </div>
              </label>
            </div>
            <div className="bg-[#34AB82] w-full text-white rounded-lg p-2">
              <IoIosSettings className="w-[40px] h-[33px]" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile device */}
      <div className="block lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="">
              <img src={navIcon} alt="navIcon" className="w-10 h-10" />
            </div>
            <div className="">
              <h3 className="text-xl font-bold text-[#2B9E76]">আল হাদিস</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearch(!search)}
              className="bg-[#ECEEF0] dark:bg-[#383838] w-10 h-10 rounded-lg p-2 text-center"
            >
              <FiSearch></FiSearch>
            </button>
            <button
              onClick={() => setSetting(!setting)}
              className="bg-[#34AB82]  text-white rounded-lg p-2"
            >
              <IoIosSettings />
            </button>
          </div>
        </div>
      </div>
      {/* search */}
      <div
        className={`${
          search
            ? "absolute top-[80px] duration-700 left-6"
            : "absolute -top-[2050px] duration-1000 left-6"
        } z-50 shadow-xl w-full p-5 bg-white  rounded-xl`}
        style={{ width: search ? "calc(100% - 35px)" : "100%" }}
      >
        <div className="">
          <label className="relative bg-[#ECEEF0] rounded-lg">
            <input
              type="text"
              className="border-[#DEE1E5] border-2 w-full py-[10px] rounded-lg focus:outline-0 focus:text-black pl-10 pr-6 text-lg placeholder:font-[inherit]"
              placeholder="Search Hadith"
            />
            <div className="absolute top-0 left-4 text-[#646464] text-lg">
              <IoSearchOutline></IoSearchOutline>
            </div>
          </label>
        </div>

        <div className="">
          <h2 className="mt-4  text-left py-4">হাদিসের বই সিলেক্ট করুন</h2>
          <select className="bg-[#ECEEF0] rounded-lg w-full h-12 px-4">
            <option value="option2">সহিহ বুখারী</option>
            <option value="option3">সহিহ মুসলিম</option>
            <option value="option4">সূনানে আন-নাসায়ী</option>
            <option value="option5">সূনানে আবু দাঊদ</option>
            <option value="option5">জামে' আত-তিরমিজি</option>
            <option value="option5">সূনানে ইবনে মাজাহ</option>
            <option value="option5">মুয়াত্তা ঈমাম মালিক</option>
            <option value="option5">রিয়াদুস সলেহিন</option>
            <option value="option5">বুলুগুল মারাম</option>
            <option value="option5">আল লূ'লূ অয়াল মারজান</option>
            <option value="option5">হাদিস সম্ভার</option>
          </select>
        </div>
        <div className="">
          <h2 className="mt-4  text-left py-4">সকল অধ্যায়</h2>
          <select className="bg-[#ECEEF0] rounded-lg w-full h-12 px-4">
            <option value="option2">ওহীর সূচনা অধ্যায়</option>
            <option value="option3">ঈমান</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-success rounded-xl"
          />
          <h4 className="mt-4 mb-2 text-[17px]">আংশিক মিল</h4>
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-success"
          />
          <h4 className="mt-4 mb-2 text-[17px]">হুবুহু মিল</h4>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setSearch(!search)}
            className=" bg-slate-200 text-black rounded-lg p-2 w-full"
          >
            বাতিল
          </button>
          <button className="text-white rounded-lg p-2 bg-[#34AB82] w-full">
            সার্চ করুন
          </button>
        </div>
      </div>
      {/* setting */}
      {/* <div className={`${setting ? 'fixed duration-700 z-50 p-5 block' : 'hidden duration-1000 z-40 p-5'}  bg-slate-400 rounded-xl`}
                style={{ width: setting ? '100%' : '100%' }}
            > */}
      <div
        className={`md:flex md:mx-auto absolute md:fixed z-50 -mt-20  duration-1000 w-full h-full
         ${setting ? "right-0" : "right-[-100%]"}
         bg-white px-6 shadow-lg`}
      >
        <div className="flex justify-between items-center">
          <h2 className="mt-4  text-left py-4">সেটিংস</h2>
          <p
            className="text-2xl text-[#868585]"
            onClick={() => setSetting(!setting)}
          >
            <IoMdClose />
          </p>
        </div>

        <div className="">
          <h2 className="mt-4  text-left py-4">আরবি ফন্ট সিলেক্ট করুন</h2>
          <select className="bg-[#ECEEF0] rounded-lg w-full h-12 px-4">
            <option value="option2">KFGQ</option>
            <option value="option3">KFGQ</option>
            <option value="option4">Al Mushaf</option>
            <option value="option5">Amiri </option>
          </select>
        </div>
        <div className="">
          <h2 className="mt-4  text-left py-4">অনুবাদ ফন্ট সাইজ</h2>
          <div className="flex items-center gap-4">
          <input type="range"
           min={0} max={40}
           value={progress}
           onChange={(e)=>setProgress(e.target.value)}
            className="w-full" />
          <p>{progress}</p>
          </div>
         
        </div>
        <div className="">
          <h2 className="mt-4  text-left py-4">এরাবিক ফন্ট সাইজ</h2>
          <div className="flex items-center gap-4">
          <input type="range"
           min={0} max={25}
           value={progress1}
           onChange={(e)=>setProgress1(e.target.value)}
            className="w-full" />
          <p>{progress}</p>
          </div>
        </div>
        {/* night mode */}
        <div className="">
        <div className="flex justify-between items-center mt-6">
                            <h4 className="text-[17px]">নাইট মোড</h4>
                            <input
                                type="checkbox"
                                className="toggle"
                                checked={isToggled}
                                onChange={toggle}
                            />

                        </div>

                        <div className="bg-[#34AB82] rounded-xl w-full p-5 text-white">
                    <h2 className="text-2xl font-medium">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h2>
                    <p className="text-base mt-[10px]">আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।</p>
                    <div className="flex justify-center">
                        <button className="text-[#389474] inline-block py-3 mt-5 bg-white rounded-lg text-base px-10 dark:text-white text-[1.05rem] hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] cursor-pointer">সাপোর্ট করুন</button>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
