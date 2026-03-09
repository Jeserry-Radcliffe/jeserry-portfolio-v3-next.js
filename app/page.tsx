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
import { HoverCardSides } from "@/components/hovercards";
import ContactForm from "@/components/contact-form";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaChevronCircleUp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
        className="flex min-h-screen w-full max-w-3xl flex-col justify-between py-7 px-10 bg-white dark:bg-black sm:items-start "
        id="top"
      >
        <p className="text-5xl font-semibold my-15">
          Building bridges between design and code
        </p>
        <p className="">
          I'm Jeserry, a design engineer at ONCE UI, where I craft intuitive
          user experiences. After hours, I build my own projects.
        </p>
        <a href="#about" className="flex justify-center mt-13 mx-10">
          <Button variant="outline" className="rounded-full p-5">
            <img
              src="/res/photo-jeserry.jpg"
              alt="jeserry.jpg"
              className="w-6 h-6 rounded-full object-cover border border-gray-200 shadow-2xl"
            />
            About - Jeserry
          </Button>
        </a>
        <a href="#workexp" className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-full py-5 px-10 mt-5 mx-10"
          >
            <MdOutlineWorkOutline />
            &nbsp;&nbsp; Work Experiences
          </Button>
        </a>

        <div
          className="w-full flex flex-col items-center justify-between mt-40 mb-20 scroll-mt-5"
          id="about"
        >
          <img
            src="/res/photo-jeserry.jpg"
            alt="jeserry.jpg"
            className="w-45 h-45 rounded-full object-cover border border-gray-200"
          />
          <div className="flex justify-center w-full p-1 text-center mt-3">
            <TiWorldOutline className="w-6 h-6 text-center text-blue-500" />
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
            <a href="#contact">
              <Button variant="outline" className="rounded-full p-5 mt-10 mb-7">
                <MdEmail className="w-6 h-6 text-center" />
                Send an Email
              </Button>
            </a>
          </div>
          <div>
            <p className="text-4xl font-bold">Mark Jeserry</p>
            <p className="text-2xl font-extralight text-center">Programmer</p>
          </div>

          <div className="mt-5 flex justify-between text-center w-[85%]">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <a href="">
                <FaGithub style={{ width: "25px", height: "25px" }} />
              </a>
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <a href="">
                <FaLinkedin style={{ width: "25px", height: "25px" }} />
              </a>
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <a href="">
                <MdEmail style={{ width: "25px", height: "25px" }}></MdEmail>
              </a>
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
              <a href="">
                <IoDocument style={{ width: "25px", height: "25px" }} />
              </a>
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

        <div id="workexp" className="scroll-mt-10">
          <div className="w-full flex my-2 ">
            <h1 className="text-3xl">Work Experience</h1>
          </div>

          <div className="flex flex-col w-full my-2">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Pru Life UK</p>
              <p className="text-gray-400">2025</p>
            </div>
            <span className="text-blue-400 text-sm">Branch Assistant</span>
          </div>
          <div>
            <ul className="list-disc list-inside p-3 text-md my-2">
              <li>
                Redesigned the UI/UX for the FLY platform, resulting in a 20%
                increase in user engagement and 30% faster load times.
              </li>
              <br />
              <li>
                Spearheaded the integration of AI tools into design workflows,
                enabling designers to iterate 50% faster.
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full my-2">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Pru Life UK</p>
              <p className="text-gray-400">2025</p>
            </div>
            <span className="text-blue-400 text-sm">
              Admin OJT | IT Support
            </span>
          </div>
          <div>
            <ul className="list-disc list-inside p-3 text-md my-2">
              <li>
                Redesigned the UI/UX for the FLY platform, resulting in a 20%
                increase in user engagement and 30% faster load times.
              </li>
              <br />
              <li>
                Spearheaded the integration of AI tools into design workflows,
                enabling designers to iterate 50% faster.
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full my-2">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">URS Morong</p>
              <p className="text-gray-400">2023 - 2024</p>
            </div>
            <span className="text-blue-400 text-sm">
              Budget Student Assistant
            </span>
          </div>
          <div>
            <ul className="list-disc list-inside p-3 text-md my-2">
              <li>
                Redesigned the UI/UX for the FLY platform, resulting in a 20%
                increase in user engagement and 30% faster load times.
              </li>
              <br />
              <li>
                Spearheaded the integration of AI tools into design workflows,
                enabling designers to iterate 50% faster.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex mt-10 mb-2 ">
          <h1 className="text-3xl">Studies</h1>
        </div>

        <div className="mb-5">
          <p className="text-lg">University of Rizal System</p>
          <p className="text-gray-400">Studied BS Computer Science</p>
          <p className="text-gray-400">Cum Laude</p>
        </div>

        <div>
          <p className="text-lg">ICCT Colleges</p>
          <p className="text-gray-400">Studied STEM</p>
        </div>

        <div>
          <div className="w-full flex mt-10 mb-2 ">
            <h1 className="text-3xl">Technical Skills</h1>
          </div>

          <div className="mb-2">
            <p className="text-bold">Programming Languages: </p>
          </div>

          <div className="flex flex-wrap gap-2 w-full">
            <Badge variant={"secondary"}>Python</Badge>
            <Badge variant={"secondary"}>Java</Badge>
            <Badge variant={"secondary"}>VB.Net</Badge>
            <Badge variant={"secondary"}>Php</Badge>
          </div>

          <div className="mt-5 mb-2 ">
            <p className="text-bold">Web Development: </p>
          </div>

          <div className="flex w-full flex-wrap gap-2">
            <Badge variant={"secondary"}>HTML</Badge>
            <Badge variant={"secondary"}>CSS</Badge>
            <Badge variant={"secondary"}>Tailwind CSS</Badge>
            <Badge variant={"secondary"}>JavaScript</Badge>
            <Badge variant={"secondary"}>Next JS</Badge>
            <Badge variant={"secondary"}>Shadcdn UI</Badge>
          </div>

          <div className="mt-5 mb-2 ">
            <p className="text-bold">Networking & IT: </p>
          </div>

          <div className="flex w-full flex-wrap gap-2">
            <Badge variant={"secondary"}>Basic Network Configuration</Badge>
            <Badge variant={"secondary"}>Troubleshooting</Badge>
          </div>

          <div className="mt-5 mb-2 ">
            <p className="text-bold">Database Management: </p>
          </div>

          <div className="flex w-full flex-wrap gap-2">
            <Badge variant={"secondary"}>MySQL</Badge>
          </div>

          <div className="mt-5 mb-2 ">
            <p className="text-bold">Tools & Technologies: </p>
          </div>

          <div className="flex w-full flex-wrap gap-2">
            <Badge variant={"secondary"}>MS Office</Badge>
            <Badge variant={"secondary"}>VS Studio Code</Badge>
            <Badge variant={"secondary"}>Adobe Photoshop</Badge>
            <Badge variant={"secondary"}>Canva</Badge>
            <Badge variant={"secondary"}>Github</Badge>
            <Badge variant={"secondary"}>Git</Badge>
          </div>
        </div>

        <div className="mt-15">
          <div className="w-full flex my-2 ">
            <h1 className="text-3xl">Projects</h1>
          </div>
          <div className="my-10">
            <p className="text-xl my-3">Grade 10 Learning Module</p>
            <img
              src="/res/module.png"
              alt="module.png"
              className="w-full aspect-4/3 object-cover rounded-lg my-5"
            />
            <p className="text-sm my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              corporis vel aperiam necessitatibus accusantium. Excepturi rerum
              cumque, eius aut esse omnis voluptas odit, dignissimos,
              praesentium quis eos autem dolorum itaque.
            </p>
            <p>
              <a
                href="https://jeserry-radcliffe.github.io/Module/"
                className="cursor-pointer"
              >
                Project Link
              </a>
            </p>
            <div className="flex w-full flex-wrap gap-2 mt-5">
              <Badge variant={"secondary"}>HTML</Badge>
              <Badge variant={"secondary"}>CSS</Badge>
            </div>
          </div>

          <div className="my-10">
            <p className="text-xl">Budget Monitoring System</p>
            <img
              src="/res/bms1.jpg"
              alt="bms.jpg"
              className="w-full object-cover rounded-lg my-5"
            />
            <p className="text-sm my-5">
              This system records and categorizes expenses, provides real-time
              updates on spending, and monitors all sources of income against
              projected revenues. It aids in creating detailed budget plans and
              setting financial goals, while sending alerts for overspending or
              unusual activity, and notifying users of upcoming payments or
              deadlines. With its ability to generate reports on financial
              performance and offer insights of organized tables.
            </p>
            <p>
              <a
                href="https://jeserry-radcliffe.github.io/Module/"
                className="cursor-pointer"
              >
                Project Link
              </a>
            </p>
            <div className="flex w-full flex-wrap gap-2 mt-5">
              <Badge variant={"secondary"}>HTML</Badge>
              <Badge variant={"secondary"}>CSS</Badge>
              <Badge variant={"secondary"}>JavaScript</Badge>
              <Badge variant={"secondary"}>Php</Badge>
              <Badge variant={"secondary"}>MySQL</Badge>
            </div>
          </div>

          <div className="my-10">
            <p className="text-xl">URS Landing Page</p>
            <img
              src="/res/urs.jpg"
              alt="urs.jpg"
              className="w-full object-cover rounded-lg my-5"
            />
            <p className="text-sm my-5">
              The University of Rizal System landing page welcomes
              students/admin with a clean design that highlights the
              university’s mission and academic programs. It provides easy
              access to important sections such as admissions, academics, and
              student services. The page also shares news and events to keep
              students and visitors informed.
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=aqnKQRWLhF4"
                className="cursor-pointer"
              >
                Project Link
              </a>
            </p>
            <div className="flex w-full flex-wrap gap-2 mt-5">
              <Badge variant={"secondary"}>HTML</Badge>
              <Badge variant={"secondary"}>CSS</Badge>
              <Badge variant={"secondary"}>Php</Badge>
            </div>
          </div>
        </div>

        <div className="my-15 scroll-mt-8" id="contact">
          <div className="w-full flex my-2 ">
            <h1 className="text-3xl">Contact</h1>
          </div>
          <div>
            <ContactForm></ContactForm>
          </div>
        </div>

        <footer>
          <p className="text-sm text-center flex flex-col items-center justify-center w-full">
            © Mark Jeserry Sicat - All Rights Reserved 2026
          </p>

          <div className="mt-5 flex justify-between text-center items-center w-[85%] mx-auto">
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
        </footer>

        <div className="fixed bottom-5 right-6">
          <a href="#top" className="w-7 h-7">
            <Button
              variant={"secondary"}
              size={"icon"}
              className="rounded-full transition-transform duration-200 hover:-translate-y-2"
            >
              <FaChevronCircleUp />
            </Button>
          </a>
        </div>

        <br />
        <br />
        <ThemeToggle />

        <br />
        <br />
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
