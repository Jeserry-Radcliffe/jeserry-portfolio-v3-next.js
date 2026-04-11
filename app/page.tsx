"use client";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false); //For Image
  const [isTextOpen, setIsTextOpen] = useState(false); // For the Text

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans bg-[url('/res/siteBG-light.png')] dark:bg-black dark:bg-[url('/res/siteBG-dark.png')]  lg:bg-top bg-size-[1100px] lg:bg-contain bg-top bg-no-repeat w-full">
      <main
        className="flex min-h-screen w-full max-w-3xl flex-col justify-between py-7 px-10 sm:items-start 
        md:py-25 md:px-50 lg:px-0 lg:max-w-4xl"
        id="top"
      >
        <ThemeToggle />
        <p
          className="text-5xl font-semibold my-15 bg-cover bg-center lg:px-5
        lg:text-8xl lg:mt-20"
        >
          Building bridges between{" "}
          <span className="text-pink-500 animate-[pulse_5s_infinite]">
            design
          </span>{" "}
          and <span className="text-blue-500 animate-pulse">code</span>
        </p>
        <p className="lg:text-xl  lg:px-5">
          {/* I'm Jeserry, a design engineer, programmer, where I craft intuitive
          user experiences. After hours, I build my own projects. */}
          I'm <span className="text-amber-400 font-bold ">Jeserry</span> a
          Computer Science graduate an aspiring programmer. I enjoy turning
          ideas into working lines of code, building a clean, simple websites
          using modern tools. I'm open for many opportunities to start my tech
          career.
        </p>
        <a
          href="#about"
          className="flex justify-center mt-13 mx-10
        md:mt-25 md:mx-25 lg:mt-30 lg:mx-72"
        >
          <Button variant="outline" className="rounded-full p-5">
            <img
              src="/res/photo-jeserry.jpg"
              alt="jeserry.jpg"
              className="w-6 h-6 rounded-full object-cover border border-gray-200 shadow-2xl"
            />
            About - Jeserry
          </Button>
        </a>
        <a
          href="#workexp"
          className="flex justify-center mt-5 mx-10
        md:mx-24 lg:mb-30 lg:mx-72"
        >
          <Button variant="outline" className="rounded-full px-5 py-5">
            <MdOutlineWorkOutline />
            &nbsp;&nbsp; Work Experiences
          </Button>
        </a>
        <div
          className="w-full flex flex-col justify-between mt-40 mb-20 scroll-mt-20
          lg:flex-row"
          id="about"
        >
          <div className="lg:w-[40%] lg:sticky lg:top-20 h-fit items-center flex flex-col mt-10">
            <img
              src="/res/photo-jeserry.jpg"
              alt="jeserry.jpg"
              className="w-45 h-45 rounded-full object-cover  border-blue-500  border-2 lg:w-56 lg:h-56 lg:items-center lg:mt-0"
            />
            <div className="flex justify-center w-full p-1 items-center mt-3">
              <TiWorldOutline className="w-6 h-6 text-center text-blue-500" />
              <p className="text-center pl-3">Asia/Manila</p>
            </div>
            <div className="flex justify-center mt-3">
              <Badge variant="secondary" className="p-1 px-3 lg:py-2 lg:px-4">
                English
              </Badge>
              <Badge
                variant="secondary"
                className="p-1 px-3 ml-2 lg:py-2 lg:px-5"
              >
                Filipino
              </Badge>
            </div>
            <div className="">
              <a href="#contact">
                <Button
                  variant="outline"
                  className="rounded-full p-5 mt-10 mb-7 
                  "
                >
                  <MdEmail
                    style={{ width: "30px", height: "30px" }}
                    className="w-6 h-6 text-2xl text-center"
                  />
                  Send an Email
                </Button>
              </a>
            </div>
          </div>

          {/* right */}
          <div className="lg:w-[60%] lg:flex lg:flex-col">
            <div>
              <p className="text-4xl font-bold text-center lg:text-left lg:text-6xl">
                Mark Jeserry
              </p>
              <p className="text-2xl font-extralight text-center lg:text-left lg:text-4xl">
                Programmer
              </p>
            </div>

            <div className="mt-7 flex justify-between text-center w-[90%] mx-auto lg:w-[50%] lg:mx-0">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1 ">
                <a href="https://github.com/Jeserry-Radcliffe">
                  <FaGithub style={{ width: "25px", height: "25px" }} />
                </a>
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
                <a href="https://www.linkedin.com/in/mark-jeserry-sicat-1603aa277">
                  <FaLinkedin style={{ width: "25px", height: "25px" }} />
                </a>
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
                <a href="">
                  <MdEmail style={{ width: "25px", height: "25px" }}></MdEmail>
                </a>
              </div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 p-1">
                <a href="/res/ResumeCV - Sicat, Mark Jeserry M..pdf" download>
                  <IoDocument style={{ width: "25px", height: "25px" }} />
                </a>
              </div>
            </div>

            <div className="mt-15 flex justify-between lg:text-xl">
              <p>
                <strong>Jeserry</strong> is an URS Alumni and Cum Laude
                graduate. An aspiring programmer with a passion in transforming
                ideas and challenges into clean, simple yet elegant and working
                applications. During after hours, he does some personal
                projects, walking, cycling and attending tech seminars or
                webinars.
              </p>
            </div>

            <div id="workexp" className="scroll-mt-10 mt-20 lg:text-xl">
              <div className="w-full flex my-2 ">
                <h1 className="text-3xl">Work Experience</h1>
              </div>

              <div className="flex flex-col w-full my-5">
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">Pru Life UK</p>
                  <p className="text-gray-400">2025</p>
                </div>
                <span className="text-blue-400 text-sm">Branch Assistant</span>
              </div>
              <div>
                <ul className="list-disc list-inside p-3 text-md my-2">
                  <li>
                    Provides administrative support for the branch manager
                    includes, handling emails, phone calls, handling client
                    documents for new applications and after-sales
                    management.Manages sales records & submissions for readiness
                    and smooth process.
                  </li>
                  <br />
                  <li>
                    Provides assistance in checking hiring applications,
                    documents, forms, submission of applications. Manages
                    recruitment status.
                  </li>
                  <br />
                  <li>
                    Provides graphics design mainly in Canva, during
                    announcements, daily sales report, newly recruit agents.
                    Also provides PowerPoint slides during branch meeting or
                    branch assembly.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col w-full my-5 ">
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">Pru Life UK</p>
                  <p className="text-gray-400">2025</p>
                </div>
                <span className="text-blue-400 text-sm">
                  Admin OJT | IT Support
                </span>
              </div>
              <div>
                <ul className="list-disc list-inside p-3 text-md my-2">
                  <li>
                    Manages offices files and records, handles client emails and
                    phone calls.
                  </li>
                  <br />
                  <li>
                    {" "}
                    Helping staff with tech questions &#40;IT SUPPORT&#41;
                  </li>
                  <br />
                  <li>Provides basic troubleshooting &#40;Software&#41;</li>
                </ul>

                <div>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="text-amber-500 hover:underline"
                  >
                    See Photo
                  </button>

                  <div className="">
                    {isOpen && (
                      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pb-20 px-3 bg-black/90">
                        <button
                          onClick={() => setIsOpen(false)}
                          className=" text-white text-4xl m-3 font-light hover:scale-110 transition-transform lg:mt-10 lg:text-5xl"
                        >
                          &times;
                        </button>
                        <div className="flex flex-col items-center">
                          <img
                            className="rounded-xl md: lg:w-[60%]"
                            src="res/ojt-prulife.jpeg"
                            alt="ojt-prulife.jpeg"
                          />
                          <p className="py-5 text-white">
                            My OJT Photo - March 2025
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full my-5">
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">URS Morong</p>
                  <p className="text-gray-400">2024</p>
                </div>
                <span className="text-blue-400 text-sm">
                  Budget Student Assistant
                </span>
              </div>
              <div>
                <ul className="list-disc list-inside p-3 text-md my-2">
                  <li>
                    Responsible in preparing and maintaining financial records,
                    ensuring accuracy and compliance with office standards.
                  </li>
                  <br />
                  <li>
                    Organized and updated documentation, improving workflow and
                    accessibility.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full flex mt-10 mb-2 ">
              <h1 className="text-3xl">Studies</h1>
            </div>

            <div className="mb-5">
              <p className="text-lg lg:text-2xl">University of Rizal System</p>
              <p className="text-gray-400 lg:text-xl">
                Studied BS Computer Science
              </p>
              <p className="text-gray-400">Cum Laude</p>
            </div>

            <div>
              <p className="text-lg lg:text-2xl">ICCT Colleges</p>
              <p className="text-gray-400 lg:text-xl">Studied STEM</p>
            </div>

            <div>
              <div className="w-full flex mt-10 mb-2 ">
                <h1 className="text-3xl">Technical Skills</h1>
              </div>

              <div className="mt-5 mb-2">
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
                <p className="text-sm my-5 lg:text-lg">
                  This website was made to introduce to you the science lessons
                  based in Grade 10 Learner Module. This website is free to read
                  and any information written in this website is completely
                  reliable and free to copy. This website will work offline, and
                  specially made for the author's proffesor. I'm hoping for your
                  enjoyment in reading this website.
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
                <p className="text-sm my-5 lg:text-lg">
                  This system records and categorizes expenses, provides
                  real-time updates on spending, and monitors all sources of
                  income against projected revenues. It aids in creating
                  detailed budget plans and setting financial goals, while
                  sending alerts for overspending or unusual activity, and
                  notifying users of upcoming payments or deadlines. With its
                  ability to generate reports on financial performance and offer
                  insights of organized tables.
                </p>
                <p>
                  {/* <a href="" className="cursor-pointer">
                    Project Link
                  </a> */}
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
                <p className="text-sm my-5 lg:text-lg">
                  The University of Rizal System landing page welcomes
                  students/admin with a clean design that highlights the
                  university’s mission and academic programs. It provides easy
                  access to important sections such as admissions, academics,
                  and student services. The page also shares news and events to
                  keep students and visitors informed.
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

            <div>
              <button onClick={() => setIsTextOpen(true)} className="underline">
                <i>More of My Projects</i>
              </button>

              <div className="">
                {isTextOpen && (
                  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pb-20 px-3 bg-black/90">
                    <button
                      onClick={() => setIsTextOpen(false)}
                      className=" text-white text-4xl m-3 font-light hover:scale-110 transition-transform"
                    >
                      &times;
                    </button>
                    <div>
                      <p className="w-[80%] mx-auto py-5">Sorry this page is currently in progress. Thank you.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* <a href="" className="underline">
                <i>More of My Projects</i>
              </a> */}
            </div>

            <div className="my-15 scroll-mt-12 w-full" id="contact">
              <div className="w-full flex my-2 ">
                <h1 className="text-3xl">Contact</h1>
              </div>
              <div>
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center flex flex-col items-center justify-center w-full mx-auto">
          <p className="text-sm mb-10 lg:text-lg">
            © Mark Jeserry Sicat - All Rights Reserved 2026
          </p>

          <div className="mt-5 flex justify-between text-center items-center w-[85%] mx-auto lg:w-[40%]">
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
          <a href="#top" className="">
            <Button
              variant={"secondary"}
              size={"icon"}
              className="w-10 h-10 rounded-full transition-transform duration-200 hover:-translate-y-2"
            >
              <FaChevronCircleUp style={{ width: "20px", height: "20px" }} />
            </Button>
          </a>
        </div>
        <br />
        <br />
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
