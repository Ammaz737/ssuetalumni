import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="pt-[150px]">
        {/* Social Media Section */}
        <div className="flex gap-6 h-[20px] w-full pt-[20px]">
        <p className="text-center sm:text-left sm:pl-3 pt-4 sm:pt-12 font-thin text-[#5e249d] text-sm sm:text-base md:text-lg">
  Visit Our Social Platforms
</p>

          <div className="flex pt-[78] ml-[-200] text-[#5e249d] text-sm gap-4"> 
            <a href="https://www.linkedin.com/school/ssuetofficial" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://twitter.com/SSUET_Official" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.facebook.com/sirsyeduniversitykr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCi5Z7Pmuio5Vw2978Z7zCkg" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-center h-[190px] pb-[160px] bg-[#c9ade6]">
          <div className="rounded-md p-4">
            <img src="footerlogo.png" alt="Logo" className="w-36 sm:w-48 md:w-64 h-auto" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex justify-end mt-[-170px] mr-[20px] pl-[80px] sm-text-right md-text-right  font-semibold text-[#5e249d] sm-text-2xl md-text-3xl">
          <div>
            <p className="font-normal text-[#5e249d] font-semibold sm-font-2xl md-font-3xl ">For more information:</p>
            <a href="tel:+9221349880001" className="hover:text-[#ae73ee]">+92 21 34988000-1</a>
            <br />
            <a href="mailto:contact@ssuet.edu.pk" className="hover:text-[#ae73ee]">more contact details</a>
          </div>
        </div>
      </div>
    </div>
  );
}


