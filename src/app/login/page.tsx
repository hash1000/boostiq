"use client";
import { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Image from "next/image";
import Container from "@/components/container";
import { useRouter } from "next/navigation"; // ✅ Correct import

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "test@gmail.com" && password === "123") {
            router.push("/presentation"); // ✅ Redirect on successful login
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <Container>
            <div className="flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="p-5 flex flex-col justify-center items-center gap-2.5 2xl:gap-20 w-full"
                >
                    <div className="h-40 w-40 xl:h-64 xl:w-64 pr-6 rounded-full bg-[#A0E4FF] flex justify-center items-center">
                        <Image
                            src="/images/boostiq-logo.png"
                            alt="logo"
                            width={380}
                            height={380}
                            className="object-contain"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Username"
                        className="w-1/2 mx-auto border-black border-b-2 text-base lg:text-lg 2xl:text-3xl bg-transparent focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-1/2 mx-auto border-black border-b-2 text-base lg:text-lg 2xl:text-3xl bg-transparent focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#2C3791] text-white flex justify-center items-center xl:gap-2.5 2xl:gap-5 px-7 2xl:px-14 py-2 rounded xl:text-xl 2xl:text-xxl"
                        >
                            Login
                            <FaArrowRightFromBracket color="#fff" className="Icon" />
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
