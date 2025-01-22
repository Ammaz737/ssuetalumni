"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Footer1 from "@/components/footer1";
import Footer2 from "@/components/footer2";
// import axios from "axios";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [studentId, setStudentId] = useState("");
  const [role, setRole] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !contact || !studentId || !role || !designation || !organization) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await {   
        // axio.post
        name,
        email,
        contact,
        studentId,
        role,
        designation,
        organization,
      };
      console.log(response);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting the form!");
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex flex-col bg-gray-100">
        <h1 className="flex justify-center pt-10 font-extrabold text-4xl text-[#5e249d]">
          New Alumni
        </h1>
        <p className="flex justify-center pt-6 font-semibold text-2xl text-[#7844b1]">
          Please Fill Your Correct Information
        </p>
      </div>

      <div className="h-30 border-b-4"></div>
      <div className="flex flex-col justify-center items-center bg-[#d8c1f3] pt-10 pb-10 sm:pl-5 sm:pt-auto sm:pb-5 sm:px-3">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Name */}
          <FormField
            label="Name"
            id="name"
            type="text"
            placeholder="Enter Your Name Here"
            value={name}
            setValue={setName}
          />

          {/* Email */}
          <FormField
            label="Email"
            id="email"
            type="email"
            placeholder="Write Your Email"
            value={email}
            setValue={setEmail}
          />

          {/* Contact */}
          <FormField
            label="Contact"
            id="contact"
            type="text"
            placeholder="Enter Your Contact No"
            value={contact}
            setValue={setContact}
          />

          {/* Student ID */}
          <FormField
            label="Student ID (e.g 1994-BSE-026)"
            id="studentId"
            type="text"
            placeholder="Enter Your Student ID"
            value={studentId}
            setValue={setStudentId}
          />

          {/* Designation */}
          <FormField
            label="Designation"
            id="designation"
            type="text"
            placeholder="Write Your Current Designation"
            value={designation}
            setValue={setDesignation}
          />

          {/* Organization */}
          <FormField
            label="Organization"
            id="organization"
            type="text"
            placeholder="Write Organization Name"
            value={organization}
            setValue={setOrganization}
          />

          {/* Role Dropdown */}
          <Dropdown
            label="Select Role"
            options={["Business", "Job"]}
            value={role}
            setValue={setRole}
          />

          <div className="pt-4 sm:pt-6">
            <button
              type="submit"
              className="w-[80] h-12 border-[#521e89] hover:bg-[#a259f0] ml-[195] rounded-xl text-white bg-[#7845b0] text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

function FormField({ label, id, type, placeholder, value, setValue }) {
  return (
    <div className="pl-5 pt-4 gap-4 sm:pl-5 sm:pt-4">
      <h3 className="pl-3 mb-[-21] text-xl font-semibold pb-6 text-[#521e89]">
        {label}:
      </h3>
      <label htmlFor={id}>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full px-3 py-2 m-2 border border-[#521e89] text-black rounded sm:text-sm"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          required
        />
      </label>
    </div>
  );
}

function Dropdown({ label, options, value, setValue }) {
  return (
    <div className="pl-5 pt-4 gap-4 sm:pl-5 sm:pt-4">
      <h4 className="text-lg font-semibold text-[#521e89]">{label}:</h4>
      <select
        className="w-full px-3 py-2 m-2 border border-[#521e89] text-black rounded sm:text-sm"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
