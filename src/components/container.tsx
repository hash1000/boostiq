import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[#ECFFFD]">
      {children}
    </div>
  );
}
