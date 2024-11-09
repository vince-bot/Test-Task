"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import categories from "@/components/data/categories";
import ChevronRightIcon from "@/components/svg-icons/ChevronRightICon";
import StarIcon from "@/components/svg-icons/StarIcon";
import CheckIcon from "@/components/svg-icons/CheckIcon";

export default function Home() {

   const [activeTab, setActiveTab] = useState(0);
   const [timeLeft, setTimeLeft] = useState(86400);
   const [open, setOpen] = useState(false);

   useEffect(() => {
     // Set a timeout to open the modal after 5 seconds
     const interval = setTimeout(() => {
       setOpen(true);
     }, 5000);
 
     // Clear the interval when the component unmounts
     return () => clearTimeout(interval);
   }, []);
 
   const handleClose = () => {
     setOpen(false);
   };

   useEffect(() => {
      if (timeLeft <= 0) return;
      const timeId = setInterval(() => {
         setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timeId);
   }, [timeLeft]);

   // Format time for display hr-min-secs
   const hours = Math.floor(timeLeft / 3600);
   const minutes = Math.floor((timeLeft % 3600) / 60);
   const seconds = timeLeft % 60;

   return (
      <section className="p-[20px] 3sm:p-[50px] sm:p-[20px] lg:p-[50px]">
         <div className="w-full">
            <h1 className="font-semibold pb-5 text-[20px] 2sm:text-[20px] sm:text-[35px] text-center sm:text-start">
               Compare Our TOP 3 VPNs
            </h1>

            {/* Desktop View */}
            <div className="hidden sm:block">
               <div className="flex flex-col gap-5">
                  {categories.map((item, i) => (
                     <div key={i} className="relative rounded-md bg-white p-5">
                        {item.bestSeller === "yes" && (
                           <div className="absolute top-0 left-0 bg-[#00ACC1] text-white px-2 h-[40px] w-[40px] py-2 rounded-br-full text-sm font-bold">
                              {/* <FaStar size={16} /> */}
                              <StarIcon fill="white" strokeColor="white" className="text-white" />
                           </div>
                        )}
                        <div className="flex items-center gap-5 w-full">
                           <div className="w-full sm:w-[300px] md:w-[400px] lg:w-1/2 flex flex-col justify-center">
                              {/* <div className="flex justify-center w-full py-3">
                                 <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[150px] md:w-[250px] h-auto rounded"
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    priority 
                                 />
                              </div> */}
                              <picture className="flex justify-center w-full py-3 ">
                                 <source media="(min-width: 415px)" srcSet={item.image} />
                                 <source
                                    media="(max-width: 414px)"
                                    srcSet={item.mobile_image || item.image}
                                 />
                                 <Image
                                    src={item.mobile_image || []}
                                    width={1440}
                                    height={512}
                                    className="w-[150px] md:w-[250px] mx-auto z-[1] relative"
                                    alt={item.title}
                                    priority 

                                 />
                              </picture>
                              <span className="text-left text-[#59666C] text-sm leading-7 lg:text-[16px]">
                                 {item.description}
                              </span>
                              <span className="text-[#266BA9] pt-3 text-sm leading-4">
                                 {item.sub_content}
                              </span>
                           </div>
                           <div className="lg:w-1/2 flex flex-col lg:flex-row justify-between gap-y-4 md:gap-y-0">
                              <div className="flex flex-col justify-between gap-y-2">
                                 {item.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center gap-x-4">
                                       <span className="p-2 bg-[#266BA9] rounded-full text-white">
                                          {amenity.icon}
                                       </span>
                                       <span className="text-[#266BA9] text-sm :w-auto">{amenity.title}:</span>
                                       <span className="font-600 text-[#59666C] text-sm">{amenity.label}</span>
                                    </div>
                                 ))}
                              </div>
                              <div className="flex items-center justify-start lg:justify-end w-[150px]">
                                 <Link
                                    href={item.url || "#"}
                                    className="flex items-center bg-[#E64A19] text-sm text-white rounded justify-center text-center px-1 lg:px-3 py-2 w-full"
                                 >
                                    Visit Website <ChevronRightIcon  width="10px" height="10px" className="mt-2" />
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Mobile View Tabs */}
            <div className="sm:hidden">
               <div className="flex justify-evenly items-center mb-4 bg-[#E8E8E8]">
                  {categories.map((category, index) => (
                     <button
                        key={`tab_${index}`}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 flex-1 h-full ${activeTab === index ? 'text-white bg-white' : ''}`}
                     >
                     <div className="flex justify-center items-center w-full h-full py-3">
                        <Image
                           src={category.mobile_image}
                           alt={category.title}
                           className="object-cover w-[40px] h-full rounded"
                           width={1000}
                           height={1000}
                           quality={100}
                        />
                     </div>
                  </button>
                  ))}
               </div>

               {/* Display Selected Category Content for Mobile */}
               <div className="w-full">
                  {categories.map((item, i) => (
                     activeTab === i && (
                        <div key={i} className="relative rounded-md bg-white p-5 mb-4">
                           <div className="flex flex-col items-center gap-5">
                              <div className="flex justify-center w-full py-3">
                                 <span className="text-md font-bold">
                                    {item.title}
                                 </span>
                              </div>
                              <span className="text-left text-[#59666C] text-sm leading-7 lg:text-[16px]">
                                 {item.description}
                              </span>
                              <span className="text-[#266BA9] pt-3 text-sm leading-4">
                                 {item.sub_content}
                              </span>
                              <div className="flex flex-col gap-y-2 w-full">
                                 {item.amenities.map((amenity, j) => (
                                    <div key={j} className="flex items-center gap-x-4">
                                       <span className="p-2 bg-[#266BA9] rounded-full text-white">
                                          {amenity.icon}
                                       </span>
                                       <span className="text-[#266BA9] text-sm w-[78px] 3sm:w-auto">{amenity.title}</span>
                                       <span className="font-600 text-[#59666C] text-sm">{amenity.label}</span>
                                    </div>
                                 ))}
                              </div>

                              {/* MOBILE BEST VPN START */}
                              <div className="flex flex-col">
                                 <span className="text-center py-5 text-[20px]">
                                    Best VPN for
                                 </span>
                                 <div className="flex gap-5">
                                    {item.bestVPN.map((item, index) => (
                                       <div key={index} className="relative flex text-center w-full h-full flex-col">
                                          <div className="p-5 rounded-full border-2 border-gray-500">
                                             <span className="text-[#00ACC1]">
                                                {item.icon}
                                             </span>
                                          </div>
                                          <div className="absolute flex rounded-full p-1 bottom-[10px] justify-center w-full">
                                             <div className="text-[#00ACC1] border-2 border-gray-500 rounded-full p-1 bg-white">
                                                <CheckIcon />
                                             </div>
                                          </div>
                                          <span>{item.label}</span>
                                       </div>
                                    ))}
                                 </div>
                                 <div className="flex w-full flex-col justify-center">
                                    <span className="text-center pt-10 pb-3 text-[20px]">
                                       Starting Price
                                    </span>
                                    <div className="flex justify-center text-center w-full pb-3">
                                       <span className="text-[#266BA9] text-4xl">
                                          {/* Split the last decimal point to down */}
                                          ${Math.floor(item.price)}.
                                          {String(item.price.fixed(2)).split('.')[1][0]}
                                          <span className="block text-4xl">
                                             {String(item.price.fixed(2)).split('.')[1][1]}
                                          </span>
                                       </span>
                                    </div>
                                    <span className="text-center">per month</span>
                                 </div>
                              </div>
                              <Link
                                 href={item.url || "#"}
                                 className="flex items-center bg-[#E64A19] text-xs text-white rounded justify-center text-center px-3 py-3 mt-4 w-full"
                              >
                                 Visit Website <ChevronRightIcon />
                              </Link>
                           </div>
                        </div>
                     )
                  ))}
               </div>
            </div>
         </div>

         {/* Popup START */}
         {open && (
            <div 
               className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-3"
               onClick={handleClose}
            >
               <div  
                  className={`bg-white rounded-lg shadow-lg w-full max-w-sm sm:max-w-lg relative transform transition-transform duration-300 ease-out 
                  ${open ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
               >
                  <div className="p-6">
                     {/* Close Button */}
                     <button
                        onClick={handleClose}
                        className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-700 transition duration-200"
                        aria-label="Close"
                     >
                        <div 
                           className="bg-[#202020] px-2 rounded-full text-white"
                        >
                           x
                        </div>
                     </button>
                     
                     {/* Popup Content */}
                     <h2 
                        className="text-xl sm:text-3xl uppercase font-semibold mb-4 text-center"
                     >
                        Limited Time Offer!
                     </h2>
                     <p className="text-gray-600 text-center">
                        Save 82% On Private Internet Access. Offer Expires In:
                     </p>
                     {/* Timer Display */}
                     <div 
                        className="text-center items-center flex justify-center text-2xl font-bold text-gray-800 py-5 gap-1"
                     >
                        {/* HOUR */}
                        <div className="flex flex-col">
                           <span className="text-sm text-[#202020] text-start mb-1">
                              Hours
                           </span>
                           <div className="flex gap-1">
                              {/* Split per decimal in time */}
                              <span className="bg-[#202020] text-white px-2 py-5 text-[40px] sm:text-[70px] rounded">
                                 {String(hours).padStart(2, '0')[0]}
                              </span>
                              <span className="bg-[#202020] text-white px-2 py-5 text-[40px] sm:text-[70px] rounded">
                                 {String(hours).padStart(2, '0')[1]}
                              </span>
                           </div>
                        </div>

                        <span className="text-[#202020] mt-5"> : </span>

                        {/* MINUTES */}
                        <div className="flex flex-col">
                           <span className="text-sm text-[#202020] text-start mb-1">
                              Minutes
                           </span>
                           <div className="flex gap-1">
                              <span className="bg-[#202020] text-white px-2 py-5 text-[40px] sm:text-[70px] rounded">
                                 {String(minutes).padStart(2, '0')[0]}
                              </span>
                              <span className="bg-[#202020] text-white px-2 py-5 text-[40px] sm:text-[70px] rounded">
                                 {String(minutes).padStart(2, '1')[1]}
                              </span>
                           </div>
                        </div>

                        <span className="text-[#202020] mt-5"> : </span>

                        {/* SECONDS */}
                        <div className="flex flex-col">
                           <span className="text-sm text-[#202020] text-start mb-1">
                              Seconds
                           </span>
                           <div className="flex gap-1">
                              <span className="bg-[#202020] text-white px-2 py-5 text-[40px] sm:text-[70px] rounded">
                                 {String(seconds).padStart(2, '0')[0]}
                              </span>
                              <span className="bg-[#202020] text-white px-2 py-5 text-[40px] sm:text-[70px] rounded">
                                 {String(seconds).padStart(2, '0')[1]}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full ">
                     <span className="uppercase text-white bg-[#E2223B] w-full text-center py-5 rounded-br-lg rounded-bl-lg">
                        82% Discount on VPN
                     </span>
                  </div>
               </div>
            </div>
         )}
         {/* POPUP END */}
      </section>
   );
}
