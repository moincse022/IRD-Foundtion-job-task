import React, { useState } from "react";
import navIcon from "../assets/navIcon.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  const [search, setSearch] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <div>
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
            <button className="bg-[#34AB82]  text-white rounded-lg p-2">
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
        <input type="checkbox" className="checkbox checkbox-xs checkbox-success rounded-xl" />
                    <h4 className="mt-4 mb-2 text-[17px]">আংশিক মিল</h4>
                    <input type="checkbox" className="checkbox checkbox-xs checkbox-success" />
                    <h4 className="mt-4 mb-2 text-[17px]">হুবুহু মিল</h4>
        </div>

      <div className="flex gap-4">
         <button onClick={()=>setSearch(!search)} className=" bg-slate-200 text-black rounded-lg p-2 w-full">বাতিল</button>
         <button className="text-white rounded-lg p-2 bg-[#34AB82] w-full">সার্চ করুন</button>
      </div>
      </div>
    </div>
  );
};

export default Header;
