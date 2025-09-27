import React from "react";

import About from "../Page/about";
import PjList from "../component/PjList";
import Welcome from "../component/Welcome";
import Content from "../Page/content";
import MyProjects from "./projectpage";
import Footer from "../component/Footer";

const Home = () => {
 
  return (
    <div className="autoshow card bg-[#1f4a8c] ">
      <div className='min-h-screen flex justify-center'>
        <Welcome />
      </div>
      <Content />
      <About />
      <MyProjects/>
      
      
    </div>
  );
};

export default Home;
