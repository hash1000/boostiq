import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsList } from "react-icons/bs";

export default function Page() {
  return (
    <Container>
      <div className="p-7 flex  h-full relative">
        <aside className="w-md bg-[#A0E4FF] p-4  text-center">
          <h2 className="xl:text-xl 3xl:text-xxl  mb-2">Shared Place</h2>
          <h2 className="xl:text-xl 3xl:text-xxl mb-2">Private</h2>
          {[...Array(4)].map((_, i) => (
            <>
            <input key={i} className="border-b-2 xl:min-h-5 3xl:min-h-16 bg-transparent border-black w-full mb-4" />
            <br/>
            </>
          ))}
          <h2 className="xl:text-xl 3xl:text-xxl">Shared With You</h2>
          {[...Array(4)].map((_, i) => (
            <>
            <input key={i} className="border-b-2 xl:min-h-5 3xl:min-h-16 bg-transparent border-black w-full mb-4" />
            <br/>
            </>
          ))}
          <br />
          <h2 className="xl:text-xl 3xl:text-xxl">Sharing</h2>
          {[...Array(3)].map((_, i) => (
            <>
            <input key={i} className="border-b-2 xl:min-h-5 3xl:min-h-16 bg-transparent border-black w-full mb-4" />
            <br/>
            </>
          ))}
        </aside>
        <div className="bg-[#A0E4FF] flex absolute right-7 justify-center items-center p-2.5 gap-1.5">
          <p className="pl-8">Assign task progress</p>
          <BsList size={40} />
        </div>
        <div className="bg-[#A0E4FF] text-center flex justify-center items-center text-2xl w-[402px] h-[137px] absolute bottom-7 right-7">
          TODAY’S QUOTE <br />
          FOR
          <br /> COLLABORATION
          <br /> STUDY
        </div>
        <div className="flex justify-center gap-2.5 items-center absolute left-[50%] bottom-0 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/zoom">
          <p className="bg-[#A0E4FF] border xl:text-xl 3xl:text-xxl px-2">
            Create Study Group
          </p>
          </Link>
          
          <Image src="/images/skype.png" alt="skype" width={50} height={70} />
        </div>
      </div>
    </Container>
  );
}
