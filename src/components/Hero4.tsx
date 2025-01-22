import React from 'react'; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';

export default function Hero4() {
  return (
    <div>
      {/* Section Heading */}
      <div className="flex flex-wrap justify-start gap-2 text-blue-950 pt-9 pl-10 pr-9 font-bold text-3xl sm:text-4xl">
        <h1>QUADfilms</h1>
        <h1 className="pl-4 gap-1 sm:pl-0">QUADcast</h1>
        <h4 className="text-lg font-medium text-blue-950 sm:pl-4 pt-2 mt-1 sm:mt-0">See all QUADcasts</h4>
      </div>

      {/* Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-4 sm:px-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-4 bg-white hover:bg-purple-100 rounded-md shadow-md">
          <Image
            src="/N1.jpg" // Correct path assuming images are in the public folder
            alt="Alumni Stories: 80,000 hours showed me how to turn philosophy into action"
            width={400}
            height={280}
            className="w-full h-[280px] object-cover rounded-md mb-4"
          />
          <div className="text-center">
            <p className="font-semibold text-blue-950 text-sm sm:text-base">ALUMNI STORIES: '80,000 HOURS SHOWED ME HOW TO TURN PHILOSOPHY INTO ACTION'</p>
            <p className="font-semibold text-blue-950 pt-2 text-xs sm:text-sm">25 Sep 2024</p>
            <p className="text-blue-950 pt-3 text-xs sm:text-sm">Cutting-edge insights into philosophical practices and their impact on action-oriented careers.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-4 bg-white hover:bg-purple-100 rounded-md shadow-md">
          <Image
            src="/N2.jpg" // Correct path assuming images are in the public folder
            alt="Alumni Stories: Oxford nurtured my unconventional ambition"
            width={400}
            height={280}
            className="w-full h-[280px] object-cover rounded-md mb-4"
          />
          <div className="text-center">
            <p className="font-semibold text-blue-950 text-sm sm:text-base">ALUMNI STORIES: 'SSUET NURTURED MY UNCONVENTIONAL AMBITION'</p>
            <p className="font-semibold text-blue-950 pt-2 text-xs sm:text-sm">16 April 2024</p>
            <p className="text-blue-950 pt-3 text-xs sm:text-sm">A journey through non-traditional paths of ambition shaped by unique experiences at SSUET.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-4 bg-white hover:bg-purple-100 rounded-md shadow-md">
          <Image
            src="/N3.jpg" // Correct path assuming images are in the public folder
            alt="Anne-Marie Imafidon (Keble, 2006)"
            width={400}
            height={280}
            className="w-full h-[280px] object-cover rounded-md mb-4"
          />
          <div className="text-center">
            <p className="font-semibold text-blue-950 text-sm sm:text-base">The Launchpad for My Extraordinary Journey</p>
            <p className="font-semibold text-blue-950 pt-2 text-xs sm:text-sm">8 Feb 2022</p>
            <p className="text-blue-950 pt-3 text-xs sm:text-sm">Discover the transformative experiences that propelled Anne-Marie Imafidon’s career.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center p-4 bg-white hover:bg-purple-100 rounded-md shadow-md">
          <Image
            src="/N4.jpg" // Correct path assuming images are in the public folder
            alt="Aron Gelbard (Jesus, 2000)"
            width={400}
            height={280}
            className="w-full h-[280px] object-cover rounded-md mb-4"
          />
          <div className="text-center">
            <p className="font-semibold text-blue-950 text-sm sm:text-base">SSUET to Success (Pursuing My Unique Dreams)</p>
            <p className="font-semibold text-blue-950 pt-2 text-xs sm:text-sm">21 May 2016</p>
            <p className="text-blue-950 pt-3 text-xs sm:text-sm">Follow Aron Gelbard’s unique path to success, inspired by his SSUET experience.</p>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center pt-6">
        <div className="bg-[#a67cd4] w-[305px] h-[60px] text-lg flex items-center justify-center shadow-lg hover:bg-[#b991e7] cursor-pointer rounded-md">
          <p className="flex text-center text-white font-semibold">
            SSUET TODAY ARCHIVE
            <MdOutlineKeyboardArrowRight fontSize={25} />
          </p>
        </div>
      </div>
    </div>
  );
}
