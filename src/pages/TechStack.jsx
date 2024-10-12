import React from 'react'
import Divider from '../components/Divider'
import java from '../assets/images/java.svg'
import python from '../assets/images/python.svg'
import cpp from '../assets/images/c-plusplus.svg'
import csharp from '../assets/images/c-sharp.svg'
import javascript from '../assets/images/javascript.svg'
import php from '../assets/images/php.svg'
import bootstrap from '../assets/images/bootstrap.svg'
import tailwind from '../assets/images/tailwindcss-icon.svg'
import gsap from '../assets/images/greensock-icon.svg'
import react from '../assets/images/react.svg'
import laravel from '../assets/images/laravel.svg'
import html from '../assets/images/html-5.svg'
import css from '../assets/images/css-3.svg'
import git from '../assets/images/git-icon.svg'
import github from '../assets/images/github-icon.svg'
import postman from '../assets/images/postman-icon.svg'
import xampp from '../assets/images/xampp.svg'
import sql from '../assets/images/mysql-icon.svg'

const techStackData = [
  {
    title: "General Purpose",
    items: [
      { src: java, alt: "java-img" },
      { src: python, alt: "python-img" },
      { src: cpp, alt: "cpp-img" },
      { src: csharp, alt: "csharp-img" },
      { src: javascript, alt: "js-img" },
      { src: php, alt: "php-img" },
    ]
  },
  {
    title: "Web Development",
    items: [
      { src: html, alt: "html-img" },
      { src: css, alt: "css-img" },
      { src: react, alt: "react-img" },
      { src: laravel, alt: "laravel-img" },
      { src: bootstrap, alt: "bootstrap-img" },
      { src: tailwind, alt: "tailwind-img" },
      { src: gsap, alt: "gsap-img" },
      { src: sql, alt: "sql-img" },
    ]
  },
  {
    title: "Other Tools",
    items: [
      { src: git, alt: "git-img" },
      { src: github, alt: "github-img" },
      { src: postman, alt: "postman-img" },
      { src: xampp, alt: "xampp-img" },
    ]
  }
];

const TechStack = () => {
  return (
    <>
      { techStackData.map((section, index) => (
        <Divider key={index} title={section.title}>
          {section.items.map((item, idx) => (
            <img key={idx} className="w-40" src={item.src} alt={item.alt} />
          ))}
        </Divider>
      )) }
    </>
  );
};

export default TechStack;
