"use client";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { useStopwatch } from "react-timer-hook";

export default function page() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true, interval: 20 });

  return (
    <Container>
      <div className="p-14 h-full flex flex-col">
        <h2 className=" md:text-3xl 3xl:text-xxl font-semibold">
          Pomodoro Timer
        </h2>

        <div className="flex-1 flex justify-center items-center">
  <div className="bg-[#A0E4FF] rounded-full md:w-[400px] md:h-[400px] 3xl:w-[600px] 3xl:h-[600px] flex justify-center items-center relative">
    
    {/* Book Images - Placed at 0°, 120°, 240° */}
    {[1, 2, 3].map((_, index) => {
      const angle = index * 120;
      return (
        <div
          key={`book-${index}`}
          className="absolute"
          style={{
            transform: `rotate(${angle}deg) translate(calc(50% + 9vw)) rotate(-${angle}deg)`,
            transformOrigin: "center",
          }}
        >
          <Image src="/images/book.png" alt="book" width={50} height={50} />
        </div>
      );
    })}

    {/* Pen Images - Placed at 60°, 180°, 300° */}
    {[1, 2, 3].map((_, index) => {
      const angle = index * 120 + 60; // Midpoint between books
      return (
        <div
          key={`pen-${index}`}
          className="absolute"
          style={{
            transform: `rotate(${angle}deg) translate(calc(50% + 9vw)) rotate(-${angle}deg)`,
            transformOrigin: "center",
          }}
        >
          <Image src="/images/pen.png" alt="pen" width={50} height={40} />
        </div>
      );
    })}

    {/* Center Timer */}
    <div className="bg-white rounded-full md:w-[250px] md:h-[250px] 3xl:w-[400px] 3xl:h-[400px] flex justify-center items-center">
      <div className="bg-black text-white rounded-md px-5 py-2">
        <div className="text-5xl">
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    </div>
  </div>
</div>



        <footer className="flex justify-between ">
          <div className="flex justify-center gap-5">
            <label className="md:text-3xl 3xl:text-5xl p-3 bg-white">
              Task
            </label>
            <input
              className="border rounded-full w-96 bg-[#D9D9D9] md:py-1 3xl:py-1.5 px-5"
              placeholder="Type Something"
            />
          </div>
          <div className="flex justify-center gap-5">
            <button
              className="bg-[#A0E4FF] md:text-3xl 3xl:text-5xl border-0 px-3 py-2 rounded-full"
              onClick={start}
            >
              Start
            </button>
            <button
              className="bg-[#A0E4FF] md:text-3xl 3xl:text-5xl border-0 px-3 py-2 rounded-full"
              onClick={pause}
            >
              Pause
            </button>
            <button
              className="bg-[#A0E4FF] md:text-3xl 3xl:text-5xl border-0 px-3 py-2 rounded-full"
              onClick={() => reset(undefined, false)} // Fix: Ensures correct parameters
            >
              Reset
            </button>
          </div>
        </footer>
      </div>
    </Container>
  );
}
