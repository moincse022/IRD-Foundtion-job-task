import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { TbBooks } from "react-icons/tb";
import book from "../assets/books.png";
import { IoSearchOutline } from "react-icons/io5";
import icon from '../assets/num.png'
import useData from "../Hook/useData";
import vip from '../assets/chapterIcon.png'
import { LiaBookOpenSolid } from "react-icons/lia";
import { HiOutlineBookmark } from "react-icons/hi";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineReport } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RxCopy } from "react-icons/rx";
const Home = () => {
    const [data]=useData();
    console.log(data);
  const [isBookActive, setIsBookActive] = useState(false);
  const [isChapterActive, setIsChapterActive] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
    const [activeCategoryData, setActiveCategoryData] = useState([]);
    useEffect(() => {
        if (data?.categories?.length > 0) {
            const firstCategory = data.categories[0];
            setActiveCategory(firstCategory?.id);
            setActiveCategoryData(firstCategory);
        }
    }, [data]);
  const handleBookClick = () => {
    setIsBookActive(true);
    setIsChapterActive(false);
  };

  const handleChapterClick = () => {
    setIsBookActive(false);
    setIsChapterActive(true);
  };
  return (
    <div>
      <div className="fixed top-0 left-24 bg-[#F2F4F6] mt-20 p-4 rounded-tl-3xl h-full w-full flex gap-6">
        <div className="bg-white h-[85.5vh] rounded-3xl w-[350px] ">
          <div className="flex items-center w-full">
            <button
              onClick={handleBookClick}
              className={`${
                isBookActive
                  ? "bg-[#2B9E76] text-white border-b border-[#2B9E76]"
                  : "bg-white border-b"
              } w-full rounded-tl-xl py-[11px] text-xl`}
            >
              বই
            </button>
            <button
              onClick={handleChapterClick}
              className={`${
                isChapterActive
                  ? "bg-[#2B9E76] text-white border-b border-[#2B9E76]"
                  : "bg-white border-b"
              } w-full rounded-tr-xl py-[11px] text-xl`}
            >
              অধ্যায়
            </button>
          </div>
          {/* <div className="w-full mt-3 px-4">
                                <label className="relative bg-[#ECEEF0] rounded-lg">
                                    <input
                                        type="text"
                                        className="mt-2 w-full py-[10px] rounded-lg focus:outline-0 focus:text-black pl-10 pr-10 bg-[#F2F4F6] text-lg"
                                        placeholder="Search For Filter"
                                    />
                                    <div className="absolute top-[2px] left-3 text-[#646464] text-lg">
                                        <IoSearchOutline></IoSearchOutline>
                                    </div>
                                </label>
           </div> */}
          <div className="w-full mt-3 px-4">
            <label className="relative bg-[#ECEEF0] rounded-lg">
              <input
                type="text"
                className="mt-2 w-full py-[10px] rounded-lg focus:outline-0 focus:text-black pl-10 pr-10 bg-[#F2F4F6] text-lg"
                placeholder="Search For Filter"
              />
              <div className=" absolute top-1 left-3">
              <IoSearchOutline></IoSearchOutline>
              </div>
            </label>
          </div>
          <div iv className="p-5 space-y-4">
                                {data?.categories?.map((category) => (
                                    <div
                                        key={category?.name}
                                        onClick={() => {
                                            handleActive(category?.id, category);
                                            setActiveCategoryData(category);
                                        }}
                                        className={`hover:bg-[#EBFCF6] rounded-2xl p-4 flex items-center gap-4 ${activeCategory === category?.id ? 'bg-[#EBFCF6]' : ''}`}
                                    >
                                        <div className="w-12 h-[50px] relative">
                                            <img className="w-12 h-[50px]" src={icon} alt="" />
                                            <p className="absolute top-3 left-5 text-white dark:text-white text-xl font-medium  group-hover:opacity-100  xl:text-lg">{category?.id}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-[17px]">{category?.name === 'ওহীর' ? category?.name + ' ' + 'সূচনা অধ্যায়' : category?.name}</h3>
                                            <p className="text-sm text-[#40404099]">হাদিসের রেঞ্জ: {category?.range}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
        </div>
        {/* <div className="h-[92vh] overflow-y-auto scrollbar-thin pb-14 w-[850px]">
          
          <div style={{ width: "100%" }}>
            
            <div className="bg-[#FAFBFB] w-full py-4 px-4 flex items-center text-[#667085] border-b-2 border-b-[#ECEEF0] rounded-t-xl">
              <p className="text-[22px]">
                <TbBooks></TbBooks>
              </p>
              <p>
                <RiArrowRightSLine />
              </p>
              <p>Bukhari</p>
              <p>
                <RiArrowRightSLine />
              </p>

            </div>
            <div className="bg-white p-5 rounded-b-xl flex items-center gap-6">
              <img className="w-11" src={book} alt="" />
              <div className="text-[#000] font-semibold">
                <h4 className="text-2xl mb-1">সহিহ বুখারী</h4>
                <p className="text-sm">সর্বমোট হাদিস - ৭৫৬৩</p>
              </div>
              <div className="flex-1">
                <h1 className="text-right text-3xl">صحيح البخاري</h1>
              </div>
            </div>
          </div>
            
        </div> */}
        
        <div className="h-[92vh] overflow-y-auto scrollbar-thin pb-14 w-[850px]">
                        {activeCategoryData && (
                            <div >
                                <div className="bg-[#FAFBFB] py-4 px-4 flex items-center text-[#667085] border-b-2 border-b-[#ECEEF0] rounded-t-xl">
                                    <p className="text-[22px]"><TbBooks></TbBooks></p>
                                    <p><RiArrowRightSLine /></p>
                                    <p>Bukhari</p>
                                    <p><RiArrowRightSLine /></p>
                                    <p>{activeCategoryData?.serial}</p>
                                </div>
                                <div className="bg-white p-5 rounded-b-xl flex items-center gap-6">
                                    <img className="w-11" src={book} alt="" />
                                    <div className="text-[#000] font-semibold">
                                        <h4 className="text-2xl mb-1">সহিহ বুখারী</h4>
                                        <p className="text-sm">সর্বমোট হাদিস - ৭৫৬৩</p>
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-right text-3xl">صحيح البخاري</h1>
                                    </div>
                                </div>
                                <div className="bg-white p-5 rounded-xl flex items-center gap-4 my-4">
                                    <div className="bg-[#2B9E76] w-10 h-10 rounded-lg flex items-center justify-center text-[17px] font-semibold text-white">{activeCategoryData?.id}</div>
                                    <h3 className="text-[#404040] text-xl font-semibold">{activeCategoryData?.name === 'ওহীর' ? activeCategoryData?.name + ' ' + 'সূচনা অধ্যায়' : activeCategoryData?.name}</h3>
                                </div>

                                <div className="grid gap-4 mt-4">
                                    {
                                        activeCategoryData?.chapters?.map((cha, idx) => <div  className="bg-[#fff] p-5 rounded-xl" key={idx}>
                                            <div></div>
                                            {
                                                cha?.book ?<div className="flex items-center gap-3">
                                                    <p className="text-[32px] text-[#2B9E76] font-semibold"><LiaBookOpenSolid /></p>
                                                    <h4  className="text-[17px] font-semibold">{cha?.oddai}</h4>
                                                </div>
                                                    :
                                                    ''
                                            }
                                            {
                                                cha?.rasul ? <h4 className="font-semibold text-[17px] mt-4 text-gray-700">{cha?.rasul}</h4>
                                                    :
                                                    ''
                                            }
                                            {
                                                cha?.rasul ? <hr className="my-5" />
                                                    :
                                                    ''
                                            }
                                            {
                                                cha?.morme ? <p className="text-[17px]">{cha?.morme}</p>
                                                    :
                                                    ''
                                            }
                                            {
                                                cha?.arabicText1 ? <div className="text-[#2B9E76] flex items-center gap-3 text-xl font-semibold">
                                                    <img className="w-7" src={vip} alt="" />
                                                    <h3>{cha?.serial}</h3>
                                                </div>
                                                    :
                                                    ''
                                            }
                                            {
                                                cha?.arabicText1 ? <div className="pt-6">
                                                    <h1 className="text-[22px] tracking-wide pl-[13px] leading-10 mb-8 text-right">{cha?.arabicText1}</h1>

                                                    <h4 className="text-[17px] text-[#2b9e76] mb-4">{cha?.holifaName}</h4>
                                                    <h3 className="text-[17px] font-semibold">{cha?.onubad}</h3>
                                                    {
                                                        cha?.hadishMan ? <div className="mt-10 flex justify-between items-center">
                                                            <h4>হাদিসের মান : <span className="bg-[#46B891] text-white px-3 py-1.5 rounded-md font-semibold text-sm">{cha?.hadishMan}</span></h4>
                                                            <div className="flex items-center text-[22px] gap-10 text-[#868686]">
                                                                <p className="">
                                                                    <RxCopy/>
                                                                </p>
                                                                <p className="text-[23px]">
                                                                    <HiOutlineBookmark />
                                                                </p>
                                                                <p className="text-[23px]">
                                                                    <GoShareAndroid/>
                                                                </p>
                                                                <p className="text-[26px] text-[#b0b0b0]">
                                                                    <MdOutlineReport/>
                                                                </p>
                                                                <p className="text-[20px] text-[#a5a5a5]">
                                                                    <FaArrowUpRightFromSquare />
                                                                </p>
                                                            </div>
                                                        </div>
                                                            :
                                                            ''
                                                    }
                                                </div>
                                                    :
                                                    ''
                                            }
                                        </div>)
                                    }
                                </div>
                            </div>
                        )}
                    </div>
      </div>
    </div>

    // </div>
  );
};

export default Home;
