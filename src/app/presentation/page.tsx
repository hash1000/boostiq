import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import Container from "@/components/container";
import { GiSandsOfTime } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { RiZzzFill } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoDocument } from "react-icons/io5";
import Link from "next/link";

export default function Presentation() {
  return (
    <Container>
      <div className="w-full">
        <header className="border-b-2 border-black pt-6 flex flex-col gap-5">
          <h1 className="text-center text-2xl md:text-3xl 2xl:text-5xl font-bold">
            Hi Welcome Back!
          </h1>
          <h2 className="text-center text-xl md:text-2xl 2xl:text-4xl pb-2">
            "Procrastination is the art of keeping up with yesterday" -Edward
            Young
          </h2>
        </header>

        {/* Main Layout */}
        <div className="flex h-[calc(100vh-142px)] flex-col xl:flex-row">
          {/* Sidebar */}
          <div className="w-full xl:w-[15%] bg-[#ECFFFD] p-5 relative border-r-2 border-black ">
            <h4 className="font-bold text-lg xl:text-xl 3xl:text-3xl">
              Recent Work
            </h4>
            <div className=" h-[90%] overflow-auto">
              {[1, 2, 3, 4].map((_, index) => (
                <Link
                  href="/assign-task"
                  key={index}
                  className="cursor-pointer flex flex-col gap-1 p-2.5"
                >
                  <div className="bg-[#fff] border-1 border-black  h-56"></div>
                  <p className="text-center text-2xl font-medium">Chemistry</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col bg-[#ECFFFD] pt-3 w-full items-center absolute left-1/2 transform -translate-x-1/2 bottom-2.5">
              <h3 className="text-lg md:text-xl 2xl:text-2xl font-medium">
                Questions
              </h3>
              <FaLongArrowAltDown className="Icon" />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative w-full">
            <div
              className="w-[90%] xl:w-[85%] bg-[#ECFFFD] p-4 mx-auto"
              style={{ height: "80%" }}
            >
              {/* Icons Section */}
              <div className="absolute right-5 top-5 bg-[#a0e4ff] flex flex-wrap md:flex-nowrap justify-center items-center gap-5 p-4 md:px-18 md:py-3">
                <Link href="/timmer" className="cursor-pointer">
                  <GiSandsOfTime className="text-lg md:text-2xl xl:text-3xl" />
                </Link>

                <Link href="/stress-calculator" className="cursor-pointer">
                  <FaHeadSideVirus className="text-lg md:text-2xl xl:text-3xl" />
                </Link>

                <Link href="/assign-task" className="cursor-pointer">
                  <FaListCheck className="text-lg md:text-2xl xl:text-3xl" />
                </Link>

                <Link href="/planner" className="cursor-pointer">
                  <BsPeopleFill className="text-lg md:text-2xl xl:text-3xl" />
                </Link>

                <Link href="/sleep-log" className="cursor-pointer">
                  <RiZzzFill className="text-lg md:text-2xl xl:text-3xl" />
                </Link>

                <Link href="/notes" className="cursor-pointer">
                  <GrDocumentText className="text-lg md:text-2xl xl:text-3xl" />
                </Link>
              </div>

              <div className="flex justify-center gap-3 items-center absolute left-5 bottom-5">
                <CiSettings size={50} />
                <IoDocument size={50} />
              </div>
              {/* New Page Section */}
              <div className="w-[150px] md:w-[183px] flex flex-col gap-2.5 absolute right-10 bottom-10">
                <p className="text-center text-lg md:text-2xl font-medium cursor-pointer hover:underline">
                  New Page
                </p>
                <Link href="/doc-editor" passHref>
                  <div className="bg-[#A0E4FF] h-[180px] md:h-[220px] border-2 border-black flex justify-center items-center w-full cursor-pointer">
                    <FaPlus className="Icon" />
                  </div>
                </Link>
              </div>

              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-10 z-[-1]"
                style={{
                  backgroundImage: "url('/images/presentation-bg.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
