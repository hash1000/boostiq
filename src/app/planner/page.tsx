import Container from "@/components/container";
import React from "react";

export default function page() {
  return (
    <Container>
      <div className="p-14 flex flex-col gap-7 h-full">
        <h2 className="md:text-5xl 3xl:text-7xl text-center">Planner</h2>
        <div className="grid grid-flow-col grid-rows-2 gap-5 flex-1">
          <div className="bg-[#A0E4FF] text-center pt-5 text-4xl"> Monday</div>
          <div className="bg-[#A0E4FF] text-center pt-5 text-4xl"> Tuesday</div>
          <div className="bg-[#A0E4FF] text-center pt-5 text-4xl">
            {" "}
            Wednesday
          </div>

          <div className="bg-[#A0E4FF] text-center pt-5 text-4xl"> Friday</div>
          <div className="bg-[#A0E4FF] text-center pt-5 text-4xl"> Sturday</div>
          <div className="bg-[#A0E4FF] text-center pt-5 text-4xl"> Sunday</div>
        </div>
      </div>
    </Container>
  );
}
