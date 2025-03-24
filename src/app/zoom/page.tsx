import Container from "@/components/container";
import React from "react";

export default function page() {
  return (
    <Container>
      <div className="flex justify-center items-center h-full">
        <div className="bg-[#A0E4FF] flex flex-col px-44 py-24">
          <label className="text-xxl text-center">Create Code</label>
          <input className="border rounded-full w-96 bg-white py-1.5 px-5 mb-5" />
          <label className="text-xxl text-center">Password</label>
          <input className="border rounded-full w-96 bg-white py-1.5 px-5 mb-10" />
          <label className="text-xxl text-center">Name of Meeting</label>
          <input className="border rounded-full w-96 bg-white py-1.5 px-5" />
        </div>
      </div>
    </Container>
  );
}
