import Container from "@/components/container";
import React from "react";

export default function page() {
  return (
    <Container>
      <div className="flex flex-col p-14 !h-full">
        <header className="md:text-3xl 3xl:text-5xl text-right">
          Date ....... / ........ / .........
        </header>

        <main className="flex-1 h-full flex flex-col">
          <h2 className="md:text-4xl 3xl:text-6xl text-center md:py-5 3xl:py-8">
            Let’s Write It Down!!
          </h2>

          <div className="flex justify-center md:gap-2.5 3xl:gap-5 flex-1">
            <div className="bg-[#A0E4FF] w-1/3 p-9 h-full">
              <h2 className="md:text-2xl 3xl:text-4xl">
                What is one thing you accomplished today that made you feel
                proud?
              </h2>
              {[...Array(7)].map((_, i) => (
                <>
                  <input
                    key={i}
                    className="border-b-2 xl:min-h-8 3xl:min-h-16 bg-transparent border-black w-full mb-4"
                  />
                  <br />
                </>
              ))}
              <div className="flex">

              <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Center Circle */}
        
              {/* Petals (3 Triangles) */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] border-b-white"
                  style={{
                    transform: `rotate(${i * 120}deg) translateY(40px)`,
                  }}
                ></div>
              ))}
            </div>

            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Center Circle */}
        
              {/* Petals (3 Triangles) */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] border-b-white"
                  style={{
                    transform: `rotate(${i * 120}deg) translateY(40px)`,
                  }}
                ></div>
              ))}
            </div>
              </div>

            </div>

            <div className=" w-2/3 h-full flex flex-col gap-5">
              <div className="h-1/3 bg-[#A0E4FF] md:p-5 3xl:p-9 flex flex-col">
                <h2 className="md:text-2xl 3xl:text-4xl font-bold">
                  How did you feel today on a scale of 1-10?
                </h2>
                <div className="flex-1 flex justify-center items-center">
  <div className="relative w-5/6 mx-auto">
    {/* Main bar */}
    <div className="bg-white h-3 w-full relative flex">
      {/* 10 Equal Divisions */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex-1 h-full relative">
          {/* Divider Lines (except the last one) */}
          <label className="absolute right-0 -top-[275%]">{index+1}</label>
          {index < 10 && (
            <div className="absolute right-0 -top-[100%] h-10 w-3 bg-white"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
              </div>
              <div className="h-2/3 bg-[#A0E4FF] md:p-5 3xl:p-9">
                <h2 className="md:text-2xl 3xl:text-4xl font-bold">
                  What was your highest stress level today, and what caused it?
                </h2>
                {[...Array(6)].map((_, i) => (
                  <>
                    <input
                      key={i}
                      className="border-b-2 xl:min-h-8 3xl:min-h-16 bg-transparent border-black w-full mb-4"
                    />
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
}
