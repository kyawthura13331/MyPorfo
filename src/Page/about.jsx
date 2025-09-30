import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myPhoto from "../assets/media/myphotoFF.jpg";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
const About = () => {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);

  const [aboutInView, setAboutInView] = useState(false);
  const [skillInView, setSkillInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setAboutInView(true);
          }
          if (entry.target === aboutRef.current && !entry.isIntersecting) {
            setAboutInView(false);
          }
          if (entry.target === skillRef.current && !entry.isIntersecting) {
            setSkillInView(false);
          }
          if (entry.target === skillRef.current && entry.isIntersecting) {
            setSkillInView(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillRef.current) observer.observe(skillRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  return (
    <section className="aboutcss py-30 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#CBD0B9] min-h-screen flex flex-col items-center justify-center transition-all duration-700">
      <div
        ref={aboutRef}
        className={` flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl bg-[#ffffff] rounded-3xl shadow-md shadow-black/20 p-6 sm:p-10 mb-10
          ${aboutInView ? "animateABOUT-fade-in" : "opacity-0"}`}
      >
        <Link to="/content" className="shrink-0">
          <img
            src={myPhoto}
            alt="My portrait"
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </Link>

        <div className="flex-1 w-full  ">
          <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-indigo-900 mb-4 tracking-wide flex flex-wrap items-center">
            About Me
            <Link
              to="/projects"
              className="ml-2 sm:ml-4 mt-2 sm:mt-0 inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-700 via-emerald-600 to-green-400 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:from-green-400 hover:to-emerald-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <span className="mr-2">My Projects</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </h2>
          <p className="font-inter text-base sm:text-lg text-slate-700 leading-relaxed">
            Hi! I’m{" "}
            <span className="font-semibold text-black font-montserrat">
              KYAW THURA
            </span>
            , a passionate web developer with a love for creating beautiful and
            functional user experiences. I specialize in React, responsive
            design, and modern web technologies. Let’s build something amazing
            together!
          </p>
        </div>
      </div>
      <div
        ref={skillRef}
        className={`skillcss w-full max-w-4xl  rounded-3xl shadow-lg p-6 sm:p-10 
          ${skillInView ? "animateSKILL-slide-in" : "opacity-0"}`}
      >
        <div className="space-y-2 text-green-50 font-inter  text-base sm:text-lg leading-relaxed">
          <div className="font-montserrat text-xl sm:text-2xl font-bold text-black/80  tracking-wide">
            Skills
          </div>
          <div className="text-7xl  grid gap-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
            <FaHtml5 className="text-red-600 p-2 bg-black/80 rounded-2xl " />
            <MdCss className="text-orange-400 bg-black/80 rounded-2xl"  />
            <TbBrandJavascript className="text-yellow-800 bg-black/80 rounded-2xl p-2" />
            <SiReactquery className="text-blue-200 bg-black/80 rounded-2xl p-2 "/>
            <SiTailwindcss className="text-blue-200 bg-black/80 rounded-2xl p-2"/>
            <FaBootstrap className="text-yellow-400 bg-black/80 rounded-2xl p-2"/>
            <DiNodejs  className="text-blue-200 bg-black/80 rounded-2xl p-2" />
            <SiExpress className=" bg-black/80 rounded-2xl p-2" />
            <BiLogoMongodb className="bg-black/80 text-emerald-400/90 rounded-2xl p-2"/>
          </div>
        </div>
      </div>

      <style>
        {`
            .animateABOUT-fade-in {
              animation: fadeIn 1.2s ease-out forwards;
            }
            .animateSKILL-slide-in {
              animation: slideIn 1.5s ease-out forwards;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
      </style>
    </section>
  );
};

export default About;1
