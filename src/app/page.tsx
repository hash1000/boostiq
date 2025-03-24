import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
    <Link href="/login" className="text-blue-500 underline">
      Go to Login
    </Link>
  </div>
  );
}
