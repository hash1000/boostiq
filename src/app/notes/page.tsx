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
            </div>

            <div className=" w-2/3 h-full flex flex-col gap-5">
              <div className="h-1/3 bg-[#A0E4FF] md:p-5 3xl:p-9">
                <h2 className="md:text-2xl 3xl:text-4xl font-bold">
                  How did you feel today on a scale of 1-10?
                </h2>
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
