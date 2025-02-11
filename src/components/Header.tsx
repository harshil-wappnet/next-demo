"use client";

import { Group, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import noBgBlack from "@/assets/noBgBlack.png"

export default function ClientWrapper() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid hydration mismatch

    return (
        <Group className="h-full px-md justify-between">
            <Image
                className="dark:invert"
                src={noBgBlack}
                alt="logo"
                width={100}
                height={100}
            />
            <nav className="flex space-x-6">
                <Link href="/" className="hover:text-gray-300 transition">
                    Home
                </Link>
                <Link href="/latest" className="hover:text-gray-300 transition">
                    Latest News
                </Link>
                <Link href="/reviews" className="hover:text-gray-300 transition">
                    Reviews
                </Link>
                <Link href="/gadgets" className="hover:text-gray-300 transition">
                    Gadgets
                </Link>
                <Link href="/ai-tech" className="hover:text-gray-300 transition">
                    AI & Tech
                </Link>
                <Link href="/startups" className="hover:text-gray-300 transition">
                    Startups
                </Link>
            </nav>
            {/* Dark Mode Toggle */}
            <div className="bg-slate-600 rounded-full p-1 flex h-[40px] w-[70px]">
                <button
                    onClick={() => setColorScheme("light")}
                    className={`rounded-full transition-all duration-300 ease-in-out p-[5px] ${colorScheme === "light" ? "bg-white shadow-md" : "bg-transparent"
                        }`}
                >
                    ☀️
                </button>
                <button
                    onClick={() => setColorScheme("dark")}
                    className={`rounded-full transition-all duration-300 ease-in-out p-[5px] ${colorScheme === "dark" ? "bg-white shadow-md" : "bg-transparent"
                        }`}
                >
                    🌙
                </button>
            </div>
        </Group>
    );
}
