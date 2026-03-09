"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import { TiWorldOutline } from "react-icons/ti";
import { Badge } from "@/components/ui/badge";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-20 px-10 bg-white dark:bg-black sm:items-start">
        <p className="text-5xl font-semibold my-15">
          Building bridges between design and code
        </p>
        <p className="">
          I'm Jeserry, a design engineer at ONCE UI, where I craft intuitive
          user experiences. After hours, I build my own projects.
        </p>
        <Button variant="outline" className="rounded-full p-5  my-15">
          <img
            src="/res/photo-jeserry.jpg"
            alt="jeserry.jpg"
            className="w-6 h-6 rounded-full object-cover  border border-gray-200"
          />
          About - Jeserry
        </Button>

        <div className="w-full flex flex-col items-center justify-between mt-40">
          <img
            src="/res/photo-jeserry.jpg"
            alt="jeserry.jpg"
            className="w-45 h-45 rounded-full object-cover border border-gray-200"
          />
          <div className="flex justify-center w-full p-1 text-center mt-3">
            <TiWorldOutline className="w-6 h-6 text-center" />
            <p className="text-center pl-3">Asia/Manila</p>
          </div>
          <div className="flex justify-center mt-3">
            <Badge variant="secondary" className="p-1 px-3">
              English
            </Badge>
            <Badge variant="secondary" className="p-1 px-3 ml-2">
              Filipino
            </Badge>
          </div>
          <div>
            <Button variant="outline" className="rounded-full p-5  mt-15 mb-7">
              <MdEmail className="w-6 h-6 text-center" />
              Send an Email
            </Button>
          </div>
          <div>
            <p className="text-3xl font-bold">Mark Jeserry</p>
            <p className="text-2xl font-extralight text-center">Programmer</p>
          </div>

          <div className="mt-5 flex justify-between text-center w-[85%]">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <FaGithub style={{ width: "25px", height: "25px" }} />
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <FaLinkedin style={{ width: "25px", height: "25px" }} />
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <MdEmail style={{ width: "25px", height: "25px" }}></MdEmail>
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <IoDocument style={{ width: "25px", height: "25px" }} />
            </div>
          </div>

          <div className="mt-15 flex justify-between">
            <p>
              Jeserry is a Jakarta-based design engineer with a passion for
              transforming complex challenges into simple, elegant design
              solutions. Her work spans digital interfaces, interactive
              experiences, and the convergence of design and technology.
            </p>
          </div>
        </div>
        <br />
        <br />
        <ThemeToggle />
      </main>

      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        <ThemeToggle />
      </main> */}
    </div>
  );
}
