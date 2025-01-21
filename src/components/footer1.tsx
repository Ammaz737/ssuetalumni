"use client";

import React, { useState } from "react";

function Footer1() {
  const [rollNo, setRollNo] = useState("");
  const [degree, setDegree] = useState("");
  const [email, setEmail] = useState("");
  const [matricMarksheet, setMatricMarksheet] = useState<File | null>(null);
  const [degreeDocument, setDegreeDocument] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rollNo, degree, matricMarksheet, degreeDocument });
    // You can add form submission logic here (e.g., API call).
  };

  return (
    <div>
      <h2 className="text-[#5e249d] font-semibold text-center pt-[50] text-2xl underline mb-3">
        Degree Verification Form
      </h2>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 bg-[#ccabf0] hover:bg-[#dec1fc] shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto">
        
      
      <div className="flex flex-col text-[#4b1e80] gap-6 w-full max-w-4xl">
       
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="rollNo" className="block text-sm font-semibold">
                Roll No:
              </label>
              <input
                type="text"
                id="rollNo"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="Enter your Roll No"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email:
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="degree" className="block text-sm font-semibold">
                Degree Name:
              </label>
              <input
                type="text"
                id="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Enter your Degree Name"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="matricMarksheet" className="block text-sm font-semibold">
                Upload Matric Marksheet:
              </label>
              <input
                type="file"
                id="matricMarksheet"
                onChange={(e) =>
                  setMatricMarksheet(e.target.files ? e.target.files[0] : null)
                }
                className="w-full px-3 py-2 border rounded bg-gray-100"
                required
              />
            </div>
            <div>
              <label htmlFor="degreeDocument" className="block text-sm font-semibold">
                Upload Degree:
              </label>
              <input
                type="file"
                id="degreeDocument"
                onChange={(e) =>
                  setDegreeDocument(e.target.files ? e.target.files[0] : null)
                }
                className="w-full px-3 py-2 border rounded bg-gray-100"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-[#5e249d] hover:bg-[#4b1e80] rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer1;
