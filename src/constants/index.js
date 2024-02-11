import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    mimcode,
    translate,
    netflix,
    youtube,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Front End Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "MimCode",
      icon: mimcode,
      iconBg: "#383E56",
      date: "January 2022 - Present",
      points: [
        "Creating numerous web pages and animations independently as well as collaboratively with a team.",
        "Proficiency in crafting diverse web pages using HTML, CSS, and Bootstrap.",
        "Developing engaging and interactive web page projects using JavaScript.",
        " Creating a range of projects utilizing React.js.",
        "Creating interactive web pages through design and development using Bootstrap.",
        "Capability to produce well-structured, orderly, and easily readable code."
      ],
    }
  ];
  
  const projects = [
    {
      name: "Translate App",
      description:
        "Welcome to the Translator App, a powerful language translation application built with React, Redux, and Thunk. This app provides a seamless and intuitive experience for users to translate text between different languages, offering a range of features to enhance language translation capabilities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
        
      ],
      image: translate,
      source_code_link: "https://github.com/Abou1205/thunk-translate",
      source_demo_link: "https://thunk-translate.netlify.app"
    },
    {
      name: "Netflix Clone",
      description:
        "The Netflix Clone Project is a front-end web application that replicates the user interface of the popular streaming platform Netflix. It serves as a learning project to demonstrate proficiency in React, state management with Redux, and integration with external APIs using Axios.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux-thunk",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/Abou1205/Thunk-Netflix",
      source_demo_link: "https://thunk-netflix.netlify.app"
    },
    {
      name: "Youtube Clone",
      description:
        "The YouTube Clone project is a React-based application that mimics key features of the YouTube platform. It offers a simplified yet comprehensive example for React developers to understand real-world application development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "react-router-dom",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/Abou1205/youtube-clone",
      source_demo_link: "https://react-youtubee-clonee.netlify.app"
    },
  ];
  
  export { services, technologies, experiences, projects };