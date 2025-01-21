"use client"; // Ensures the component is treated as a client component

import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";

// Define types for the props
interface CardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

// Card Component
function Card({ src, alt, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-md">
      <Image
        src={src}
        alt={alt || "Image"} // Default alt text if none provided
        width={400}  // Adjust width as needed
        height={300} // Adjust height as needed
        className="w-full h-full object-cover rounded-md mb-4"
      />
      <div className="text-center">
        <p className="font-semibold text-blue-950">{title}</p>
        <p className="font-semibold text-blue-950 pt-2">2024</p>
        <p className="text-blue-950 pt-3">{description}</p>
      </div>
    </div>
  );
}

// Main Hero Component
export default function Hero() {
  const cards = [
    { src: "/b5.jpg", alt: "Card 1", title: "SSUET COLLABORATIONS", description: "Cutting-edge projects at the Grand Finale of Finding Innovative & Creative Solutions!" },
    { src: "/b2.jpg", alt: "Card 2", title: "INNOVATIVE SOLUTIONS", description: "Bringing new technologies to solve modern challenges!" },
    { src: "/b3.jpg", alt: "Card 3", title: "TECHNOLOGY DRIVEN", description: "Advancing the future with groundbreaking ideas!" },
    { src: "/b7.jpg", alt: "Card 4", title: "COLLABORATIVE EFFORTS", description: "Working together to create lasting impact!" },
    { src: "/b0.jpg", alt: "Card 5", title: "CREATIVE DESIGN", description: "Where imagination meets functionality!" },
    { src: "/b6.jpg", alt: "Card 6", title: "INNOVATION IN ACTION", description: "Shaping the future through creative thinking!" },
    { src: "/b7.jpg", alt: "Card 7", title: "INNOVATIVE VISION", description: "Leading with vision and creativity to drive change!" },
    { src: "/b8.jpg", alt: "Card 8", title: "PIONEERING SPIRIT", description: "Exploring new frontiers in technology and design!" },
  ];

  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="flex pl-4 sm:pl-12 pt-7 items-center text-gray-700">
        <IoMdHome className="text-xl sm:text-2xl" aria-label="Home" />
        <IoIosArrowForward className="text-xl sm:text-2xl mx-2" />
        <h3 className="font-semibold">QUAD</h3>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center pt-5">
        <img src="quadlogo.png" alt="Quad Logo" className="w-32 sm:w-40" />
      </div>

      {/* Heading Section */}
      <div className="text-center font-bold pt-6 text-xl sm:text-2xl text-slate-600">
        <h1>YOUR DIGITAL ALUMNI MAGAZINE</h1>
      </div>

      {/* Latest Articles Heading */}
      <div className="pl-4 sm:pl-12 text-2xl sm:text-4xl font-light text-blue-950 pt-6">
        <h1>Latest Articles</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-4 sm:px-12">
        {cards.map((card, index) => (
          <Card key={index} src={card.src} alt={card.alt} title={card.title} description={card.description} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between px-4 sm:px-12 py-6">
        <BsArrowLeftSquareFill
          size={50}
          className="cursor-pointer text-blue-950"
          aria-label="Previous"
        />
        <BsArrowRightSquareFill
          size={50}
          className="cursor-pointer text-blue-950"
          aria-label="Next"
        />
      </div>
    </div>
  );
}
