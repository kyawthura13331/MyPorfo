import Login from "../assets/media/Login_pj.png";
import singer from "../assets/media/singer_pj.png";
import todo from "../assets/media/todolist_pj.png";
import work from "../assets/media/pj_work.png";
import { Link } from "react-router-dom";
import {useState,useEffect,useRef} from "react"
const projects = [
  {
    img: Login,
    url: "https://login-psi-black.vercel.app/",
  },
  {
    img: singer,
    url: "https://song-ivory.vercel.app/",
  },
  {
    img: todo,
    url: "https://todo-list-rouge-chi-26.vercel.app/",
  },
  {
    img: work,
    url: "https://jobpj.vercel.app/",
  },
];
const PjList = () => {
   const [inView, setInView] = useState(false); 

  const contactRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
          else {
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
    
    <div ref={contactRef} className="box grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
  {projects.map((pj, idx) => (
            <Link
              key={idx}
              to={pj.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${inView ? "animate-fade-in-up ": ""}" hover:scale-105 transition-transform duration-300"`}  
              style={{
                animationDelay: `${idx * 0.5 + 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <img
                src={pj.img}
                className=" w-full h-40 object-cover rounded-lg border-white border-2"
              />
            </Link>
          ))}
           <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) forwards;
          }
          @media (max-width: 640px) {
            .grid {
              grid-template-columns: 1fr !important;
            }
            .animate-fade-in-up {
              min-width: 0;
              width: 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  
  );
};

export default PjList;
