import React, { useState, useRef, useEffect } from "react";
import myphoto from "../assets/media/myPhotoFF.jpg";
import PjList from "./PjList";

const Welcome = () => {
  const paragraph = `I AM A FRONTEND DEVELOPER. I LOVE TO CREATE BEAUTIFUL AND FUNCTIONAL WEBSITES. I HAVE A PASSION FOR LEARNING NEW TECHNOLOGIES AND IMPROVING MY SKILLS. I AM ALWAYS LOOKING FOR NEW CHALLENGES AND OPPORTUNITIES TO GROW AS A DEVELOPER.`;
  const words = paragraph.split(" ");
  const welcomeRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === welcomeRef.current && entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (welcomeRef.current) observer.observe(welcomeRef.current);
    return () => {
      if (welcomeRef.current) observer.unobserve(welcomeRef.current);
    };
  }, []);
  return (
    <div
      ref={welcomeRef}
      className={`${inView ? "animate-fade-in" : ""} welcomecss`}
    >
      <div className="box">
        <img
          src={myphoto}
          className={`box ${
            inView ? "animateForW-fade-in" : "opacity-0"
          }  ml-5 lg:ml-20 lg:mt-5  mt-10 absolute object-cover border-4 border-emerald-500 left-fit top-17 h-30 z-0 rounded-full w-30  sm:w-50 sm:h-50`}
          alt="My Photo"
        />
      </div>

      <div
        className={`${
          inView ? "animate-word-slide-in" : "opacity-0"
        }" mt-18 text-center md:mt-15 "`}
      >
        <h1
          className={`${
            inView ? "animate-word-slide-in" : "opacity-0"
          } text-4xl  ml-30 lg:text-[70px] "md:text-6xl  font-bold `}
        >
          Welcome To My Portfolio
        </h1>
        <p
          className={`${
            inView ? "animateForW-fade-in" : "opacity-0"
          } ml-40 text-[23px] text-white font-mono mt-5`}
        >
          MY NAME IS{" "}
          <span className="text-2xl font-mono  font-extrabold">KYAW THURA</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:mt-20 p-5 ">
        <p className="text-[18px] text-[#ACFCD9] lg:text-[23px] font-extrabold p-10 leading-9 flex flex-wrap">
          {words.map((word, index) => (
            <span
              key={index}
              className={`"inline-block opacity-0  ${
                inView ? "animate-word-slide-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
        <PjList />
      </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both;
          }

          .animate-slide-in {
            animation: slideIn 1.2s cubic-bezier(.4,0,.2,1) 0.3s both;
          }

          .animate-word-slide-in {
            animation: wordSlideIn 0.5s ease forwards;
          }
          .animateForW-fade-in{
            animation: wordSlideIn 2.3s ease-in-out both;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes wordSlideIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;
