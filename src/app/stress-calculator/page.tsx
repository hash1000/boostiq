import Container from "@/components/container";
import { IoArrowDownOutline } from "react-icons/io5";
import React from "react";

export default function page() {
  return (
    <Container>
      <div className="flex flex-col h-full">
        <header className="p-7 border-b-4 border-black">
          <h3 className="md:text-2xl 3xl:text-xxl font-semibold">
            Stress Ratio Calculator
          </h3>
        </header>
        <div className="flex-1">
          <div className="flex justify-center border-b-4 border-black h-2/3">
            <div className="flex-1 border-r-4 border-black p-7">
              <h2 className="md:text-2xl 3xl:text-4xl font-bold ">
                Breaks Taken
              </h2>
              <div className="flex flex-col gap-7 mt-5">
                <h3 className="md:text-2xl 3xl:text-4xl">
                  Did you take a break today?
                </h3>
                <div className="flex justify-start gap-5">
                  <div className="bg-black md:w-16 3xl:w-24 md:h-8 3xl:h-16" />{" "}
                  <span className="md:text-2xl 3xl:text-4xl font-bold">
                    Yes
                  </span>
                </div>
                <div className="flex justify-start gap-5">
                  <div className="bg-black md:w-16 3xl:w-24 md:h-8 3xl:h-16" />
                  <span className="md:text-2xl 3xl:text-4xl font-bold">No</span>
                </div>
              </div>
            </div>
            <div className="flex-1 border-r-4 border-black p-7">
              <h2 className="md:text-2xl 3xl:text-4xl font-bold">Workload</h2>
              <div className="flex flex-col gap-7 mt-5">
                <div className="flex justify-start items-center gap-5">
                  <div className="bg-black md:w-16 md:h-16 3xl:w-24 3xl:h-24  rounded-full" />
                  <span className="md:text-2xl 3xl:text-4xl font-bold">
                    Low
                  </span>
                </div>

                <div className="flex justify-start items-center gap-5">
                  <div className="bg-black md:w-16 md:h-16 3xl:w-24 3xl:h-24 rounded-full flex justify-center items-center">
                    <div className="bg-[#a0e4ff] md:w-14 md:h-14 3xl:w-20 3xl:h-20 rounded-full"></div>
                  </div>
                  <span className="md:text-2xl 3xl:text-4xl font-bold">
                    Moderate
                  </span>
                </div>

                <div className="flex justify-start items-center gap-5">
                  <div className="bg-black md:w-16 md:h-16 3xl:w-24 3xl:h-24 rounded-full" />
                  <span className="md:text-2xl 3xl:text-4xl font-bold">
                    High
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-7">
              <h2 className="md:text-2xl 3xl:text-4xl font-bold">Mood</h2>
              <div className="flex flex-col justify-center items-center gap-7 mt-5">
                <IoArrowDownOutline size={90} />
                <label className="flex justify-around">
                  <span className="text-5xl">😔</span>{" "}
                  <span className="text-5xl">😐</span>{" "}
                  <span className="text-5xl">😊</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center h-1/3">
            <div className="flex-1 border-r-4 border-black p-7">
              <div>
              <h2 className="md:text-2xl 3xl:text-4xl font-bold">Sleep</h2>
              <div className="flex flex-col gap-7 mt-5">
                <h3 className="md:text-2xl 3xl:text-4xl">
                  How many hours of sleep did you get last night?
                </h3>
                <div className="md:mt-2 3xl:mt-10">
                  <input
                    className="border-4 border-black rounded-full w-4/5 mx-auto bg-white px-5 md:py-1 3xl:py-1.5 3xl:mb-5"
                    placeholder="Type Something"
                  />
                </div>
              </div>
              </div>
            </div>

            <div className="flex-1 p-7">
            <div>
                <h2 className="md:text-2xl 3xl:text-4xl font-bold">
                  Diet and Hydration
                </h2>
                <div className="flex flex-col gap-7 mt-5">
                  <h3 className="md:text-2xl 3xl:text-4xl">Water intake</h3>
                  <div className="md:mt-2 3xl:mt-10">
                    <div className="w-full bg-[#A0E4FF] rounded-full md:h-8 3xl:h-12 dark:bg-[#A0E4FF]">
                      <div
                        className="bg-black md:h-8 3xl:h-12 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
