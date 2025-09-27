import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { nameState, emailState, messageState } from "../Recoil/Atom";
import myphoto1 from "../assets/media/myphotoFF.jpg";
import myphoto from "../assets/media/contentphoto.jpg";
import "./PageCSS/index.css";
import "./PageCSS/contentcss.css";
import Footer from "../component/Footer";

const Contact = () => {
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [message, setMessage] = useRecoilState(messageState);

  const [showForm, setShowForm] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [inView, setInView] = useState(false);

  const contactRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleHidden = () => {
    setTimeout(
      () => {
        setHidden((prev) => !prev);
      },
      hidden ? -400 : 600
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="contactcss mb-[1px]">
      <div
        ref={contactRef}
        className={`min-h-screen flex flex-col sm:flex-row flex-wrap items-center justify-center  shadow-emerald-400/50 px-4 py-10 gap-0 
      transition-opacity duration-1000 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      >
        {!showForm && (
    <div className="mt-3 text-center text-sm text-white">
      <p className="font-semibold"> Hey there!</p>
      <p className="text-gray-300 p-10">Click photo to contact me.</p>
    </div>
  )}

        <div
          className={`transition-all duration-1000 ease-in-out cursor-pointer  
        ${
          showForm
            ? "animate-move-left bg-[#2B2D42] "
            : "animate-move-reset bg-[#8D99AE] "
        } 
        ${window.innerWidth < 600 ? "animateSmall items-center mt-10 ml-2" : ""}
        rounded-xl shadow-lg p-5 w-fit max-w-sm`}
          onClick={() => {
            setShowForm((prev) => !prev);
            handleHidden();
          }}
        >
          <img
            src={showForm ? myphoto1 : myphoto1}
            className="scale-100 rounded-xl "
            alt="My Photo"
          />
          
        </div>
        
            
        <div
          className={`${
            hidden ? "block" : "shadow-amber-50"
          } transition-all duration-1000 ease-in-out 
        ${
          showForm && !hidden
            ? "animate-fade-in"
            : "moveresetContact pointer-events-none opacity-0"
        } 
        bg-black/20 rounded-xl shadow-2xl p-8 w-full max-w-md`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-6 text-center">
            Contact Me
          </h2>
          <form
            className="animate-slide-in flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="inputbox">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded  text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <span>Your Name</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded  text-white  "
              />
              <span>Your Email</span>
              <i></i>
            </div>
            <div className="inputbox">
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded  text-white focus:outline-none resize-none"
              />
              <span>Your Message</span>
              <i></i>
            </div>

            <button className="buttoncc left-1/3">Sent Message</button>
          </form>
          <div className="mt-6 text-center text-gray-400 text-xs">
            Or email me directly at{" "}
            <a
              href="mailto:kyawthura1718@gmail.com"
              className="text-emerald-300 underline"
            >
              kyawthura1718@gmail.com
            </a>
          </div>
        </div>
        <div
          className={`${
            showForm && !hidden
              ? "animate-fade-in"
              : "moveresetContact pointer-events-none opacity-0"
          } ml-10`}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
