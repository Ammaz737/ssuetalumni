import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

export default function Header2() {
  return (
    <header className="bg-white px-4 sm:px-6 md:px-12 py-4 shadow-md">
      <div className="flex items-center justify-between flex-nowrap">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-36 sm:w-48 md:w-64 h-auto"
          />
        </div>

        {/* Navigation Section */}
        <nav className="flex-grow">
          <ul className="flex justify-end items-center gap-4 sm:gap-6 ml-2 text-[#521e89] text-sm sm:text-base">
            {/* QUAD NEWS with Dropdown */}
            {/* Uncomment if needed */}
            {/* <li className="relative group">
              <button className="flex items-center hover:underline whitespace-nowrap">
                QUAD NEWS <FaChevronDown className="ml-2 text-xs sm:text-sm" />
              </button>
              <ul className="absolute hidden group-hover:block bg-[#a460ee] text-white mt-2 rounded shadow-lg w-40 z-10">
                {["News", "Interviews", "Features", "Opinion", "QUADcast"].map(
                  (item) => (
                    <li
                      key={item}
                      className="p-2 hover:bg-[#8041c4] cursor-pointer"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </li> */}

            {/* Navigation Items */}
            <li>
              <Link
                href="/ssuet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                MY SSUET
              </Link>
            </li>
            <li>
              <Link
                href="/form"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                NEW ALUMNI
              </Link>
            </li>
            <li className="hover:underline whitespace-nowrap">EVENTS</li>
            <li className="hover:underline whitespace-nowrap">
              ALUMNI GROUPS
            </li>

            {/* ENGAGE with Dropdown */}
            {/* Uncomment if needed */}
            {/* <li className="relative group">
              <button className="flex items-center hover:underline whitespace-nowrap">
                ENGAGE <FaChevronDown className="ml-2 text-xs sm:text-sm" />
              </button>
              <ul className="absolute hidden group-hover:block bg-[#a460ee] text-white mt-2 rounded shadow-lg w-64 z-10">
                {[
                  "Alumni Board",
                  "Book Club",
                  "Distinguished Friend of Oxford",
                  "Offer an Internship",
                  "Crankstart Careers Mentoring Programme",
                  "Donate",
                ].map((item) => (
                  <li
                    key={item}
                    className="p-2 hover:bg-[#8041c4] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
