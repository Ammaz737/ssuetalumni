import React from 'react'
import Header from "@/components/Header";
import Header2 from "@/components/Header2"
import Footer from "@/components/Footer";
import Footer1 from "@/components/footer1";
import Footer2 from "@/components/footer2";
import { FaEye } from "react-icons/fa";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { PiLightbulbFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";




export default function SSUET() {
  return (
   <div className='bg-gray-200'>
     <div>
       <Header/>
       <Header2/>
       <div className="bg-white flex flex-col md:flex-row items-center md:items-start">
  {/* Text Section */}
  <div className="p-6 pl-[100px] flex-1">
    <h2 className="font-bold text-4xl text-purple-800 mt-2">About the</h2>
    <h2 className="text-purple-600 text-4xl mt-3">
      Sir Syed University of Engineering <br /> and Technology
    </h2>
    <p className="text-purple-900 mt-4">
      National rankings, environmentally friendly and state-of-the facilities, growing reputation
      for excellence in teaching and affordable cost of education are some of the glaring
      attractions of SSUET. Its hallmark includes the curricula emphasizing on research, the
      air-conditioned classrooms and labs meeting international standards, sports facilities,
      symposiums and seminars, Continuing Education Programs, strict adherence to Teaching
      Schedules, sound interaction between Industry and Academia, ongoing research projects, and
      above all the Career Planning & Placement Bureau, which helps find jobs for the alumni.
    </p>
  </div>

  {/* Image Section */}
  <div className="relative flex-1">
  <img
    src="02.jpg" // Replace with your image path
    alt="Example"
    className="w-full h-[350px] md:h-[450px] object-cover"
  />
  <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-200 opacity-90 blur-10xl"></div>
</div>
</div>
<div className="flex justify-evenly pt-4 bg-purple-800 items-center">
  <div className="relative flex flex-col items-center p-4 w-[200px] bg-purple-800 hover:bg-green-500 cursor-pointer transition-all">
    <BiSolidBank size={90} className="p-4 border-gray-300" />
    <span>About Us</span>
  </div>

  <div className="relative flex flex-col items-center p-4 w-[200px] bg-purple-800 hover:bg-green-500 cursor-pointer transition-all">
    <FaEye size={90} className="p-4 border-gray-300" />
    <span>Vision</span>
    <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-300"></div>
  </div>

  <div className="relative flex flex-col items-center p-4 w-[200px] bg-purple-800 hover:bg-green-500 cursor-pointer transition-all">
    <BsFillRecordCircleFill size={90} className="p-4 border-gray-300" />
    <span>Mission</span>
    <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-300"></div>
  </div>

  <div className="relative flex flex-col items-center p-4 w-[200px] bg-purple-800 hover:bg-green-500 cursor-pointer transition-all">
    <PiLightbulbFill size={90} className="p-4 border-gray-300" />
    <span>Inspiration</span>
    <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-300"></div>
  </div>

  <div className="relative flex flex-col items-center p-4 w-[200px] bg-purple-800 hover:bg-green-500 cursor-pointer transition-all">
    <FaUserGraduate size={90} className="p-4 border-gray-300" />
    <span>Chancellors</span>
  </div>
</div>

<div>
  

<div className="flex items-center justify-center space-x-4 py-8 pl-16 mb-8">
  <div className="p-4 bg-gray-200 rounded-full flex items-center justify-center">
    <FaEye size={90} className="text-purple-800" />
  </div>

  <div className="flex flex-col">
    <h1 className="text-purple-800 text-xl font-semibold">
      Vision Statement of SSUET
    </h1>
    <h3 className="text-black mt-2 max-w-[500px]">
      To make SSUET a leading innovation provider in education and research with a focus on realizing positive economic impact, entrepreneurial mindset and a sense of social responsibility as envisioned by Sir Syed Ahmed Khan.
    </h3>
  </div>
</div>

<div className="flex items-center justify-center space-x-4 pl-16 pt-6 mb-8">
  <div className="p-4 bg-gray-200 rounded-full flex items-center justify-center">
    <BsFillRecordCircleFill size={90} className="text-green-500" />
  </div>

  <div className="flex flex-col">
    <h1 className="text-green-500 text-xl font-semibold">
      Mission Statement of SSUET
    </h1>
    <h3 className="text-black mt-2 max-w-[500px]">
      To provide an enabling environment to all stakeholders of SSUET in the pursuit of technological and socio-economic development, for the achievement of long-term societal benefits through innovation, research, commercialization and sharing of knowledge imbued with the sense of social and moral responsibility aligned with the Aligarh spirit.
    </h3>
  </div>
</div>
</div>

<div className='bg-purple-200 sm:pb-3 flex sm:flex-col md:flex-col sm:flex-row lg:flex-row'>
  <img src='sir.webp' className=' md:w-[700px] h-[500] p-6' />
  <div className='flex flex-col pt-3 sm:pt-[30px] px-6 sm:px-12'>
    <h1 className='font-extrabold text-4xl text-purple-800'>Inspiration</h1>
    <h3 className='text-black mt-4'>
      Sir Syed University of Engineering & Technology is spiritually associated with Aligarh Muslim University, Aligarh, India. The role of Muslim University Aligarh in the process of uplift and well-being of the Muslims of the subcontinent stands in bold relief in the annals of history. The domain of working of this university was not confined to teaching some subjects or disseminating knowledge; it rather transcended these spheres and encompassed the building of character and development of personality of the students along with academics.

      This university works in accordance with a philosophy that was the driving force for the Aligarh Movement. This philosophy was initiated by Sir Syed Ahmad Khan and developed by relentless work by his associates and followers. The Movement was remarkably universal and abiding in its appeal and applicability.

      Its essence was education as the prime mover of modernization, progress, and development. It put great emphasis on keeping intact the community’s own distinctive cultural identity and base. The Movement gave equal importance to character building along with scholastic instruction.

      The real outcome of the Aligarh movement was the Aligarh Spirit, which was being inculcated in every student, through the special pedagogy and instructional methods, during studies at the Muslim University, and this spirit distinguished its students. The alumni of the Muslim University, with Aligarh spirit as their characteristic, played a distinctive role in whatever position they happened to have in practical life, after education. Every student, even after education at Aligarh, derived from the Aligarh Spirit the zeal and enthusiasm for doing formidable tasks and materializing great ideas.
    </h3>
  </div>
</div>




<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="Jawed-Anwar-SSUET.webp"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Chancellor - Mr. Jawaid Anwar
        </h2>
        <p className="leading-relaxed text-base">President Aligarh Muslim University Old Boys’ Association of Pakistan</p>
        <button className="flex mx-auto mt-6 text-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">read message</button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="Act.-Vice-Chancellor.webp"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Act. Vice Chancellor - Dr. Munawwar Hussain
        </h2>
        <p className="leading-relaxed text-base">Sir Syed University of Engineering and Technolog

</p>
        <button className="flex mx-auto mt-6 text-green-500  border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">read message</button>
      </div>
    </div>
  </div>
</section>

<div>
<div className='font-bold text-4xl text-purple-800 flex justify-center'>Previous Chancellors</div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="Engr.-Z.A.-Nizami.webp"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Engr. Z.A. Nizami

        </h2>
        <p className="leading-relaxed text-base">Tenure:<br/>
        08-10-1993 ~ 06-01-2013</p>
        <button className="flex mx-auto mt-6 text-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">read message</button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="Adil-Usman.webp"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Engr. Muhammad Adil Usman
        Hussain
        </h2>
        <p className="leading-relaxed text-base">Tenure:<br/>
        07-04-2013 ~ 31-10-2015

</p>
        <button className="flex mx-auto mt-6 text-green-500  border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">read message</button>
      </div>
    </div>
  </div>
</section>
</div>


    <Footer />
    <Footer1 />
    <Footer2 />
    </div>
    
   </div>

  );
}
