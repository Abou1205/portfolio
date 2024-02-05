import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-100 flex flex-col justify-center items-center gap-3 py-3">
      <div className="flex gap-5">
        <div
          onClick={() => window.open("https://github.com/Abou1205", "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-[#915eef]"
        >
          <FaGithub />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ebubekir-yilmaz/",
              "_blank"
            )
          }
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-[#915eef]"
        >
          <FaLinkedin />
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/ebubekr1905/", "_blank")
          }
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-[#915eef]"
        >
          <FaInstagram />
        </div>
      </div>
      <div
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1gyTWclXKkt75rUiuOWfIbS65iV-ulJdb/view",
            "_blank"
          )
        }
        className="font-bold cursor-pointer hover:text-[#915eef]"
      >
        Click to see my resume
      </div>
    </footer>
  );
};

export default Footer;
