import Container from "@/components/container";
import TextEditor from "@/components/TextEditor";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <Container>
        <div className="flex flex-col h-full">
      {/* Header with Logo and Document Title */}
      <div className="flex items-center">
      <div className="w-40 h-28 md:w-48 md:h-32 lg:w-56 lg:h-36 xl:w-64 xl:h-40 3xl:w-auto 3xl:h-auto">
  <Image
    src="/images/boostiq-logo.png"
    alt="logo"
    width={250}
    height={195}
    className="object-contain w-full h-full"
  />
</div>
        
        <div className="bg-[#A0E4FF] w-[80%] md:py-2 3xl:py-2.5 3xl:px-96 flex justify-center items-center">
          <p className="text-3xl">Untitled Document</p>
        </div>
      </div>


      {/* Text Editor */}
      <div className="flex-1">
      <TextEditor />
      </div>
      
      {/* Menu Bar */}
      <footer className="py-4 flex space-x-6 text-lg px-8 relative">
  {/* File Dropdown */}
  <div className="relative group">
    <div className="absolute hidden group-hover:block bg-[#ECFFFD] border shadow-md p-2 mb-1 rounded-md bottom-full left-0 z-50">
      <ul className="space-y-1">
        <li className="hover:bg-gray-100 p-2 cursor-pointer">New</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Open</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Make a copy</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Download</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Email</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Rename</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Move</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Move to bin</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Print</li>
      </ul>
    </div>
    <button className="hover:text-blue-500">File</button>
  </div>

  {/* Edit Dropdown */}
  <div className="relative group">
    <div className="absolute hidden group-hover:block bg-[#ECFFFD] border shadow-md p-2 mb-1 rounded-md bottom-full left-0 z-50">
      <ul className="space-y-1">
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Undo</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Redo</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Cut</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Copy</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Paste</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Select All</li>
      </ul>
    </div>
    <button className="hover:text-blue-500">Edit</button>
  </div>

  {/* Insert Dropdown */}
  <div className="relative group">
    <div className="absolute hidden group-hover:block bg-[#ECFFFD] border shadow-md p-2 mb-1 rounded-md bottom-full left-0 z-50">
      <ul className="space-y-1">
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Image</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Table</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Drawing</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Chart</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Emoji</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Equation</li>
      </ul>
    </div>
    <button className="hover:text-blue-500">Insert</button>
  </div>

  {/* Tools Dropdown */}
  <div className="relative group">
    <div className="absolute hidden group-hover:block bg-[#ECFFFD] border shadow-md p-2 mb-1 rounded-md bottom-full left-0 z-50">
      <ul className="space-y-1">
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Spellings & Grammar</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Word Count</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Citation</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Line Number</li>
        <li className="hover:bg-gray-100 p-2 cursor-pointer">Dictionary</li>
      </ul>
    </div>
    <button className="hover:text-blue-500">Tools</button>
  </div>
</footer>

        </div>

    </Container>
  );
}
