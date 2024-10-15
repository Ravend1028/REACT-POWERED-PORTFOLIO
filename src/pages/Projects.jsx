import React from 'react'
import login from '../assets/images/login-sys.PNG'
import sports from '../assets/images/sports-reg.PNG'
import Section from '../components/Section'

const projectData = [
  {
    title: "OOP-BASED LOGIN SYSTEM",
    description: "Developed a secure PHP OOP-based login system using the MVC design pattern, integrating Google reCAPTCHA v2 to prevent spam and PHPMailer for OTPs in the 'forgot password' feature. Designed for scalability and efficient user authentication.",
    image: login,
    alt: "OOP-Based Login System",
    imageStyle: "rounded-xl lg:w-5/12",
  },
  {
    title: "SPORTS REGISTRATION SYSTEM",
    description: "Created a Sports Registration System for junior Computer Engineering students, featuring full CRUD functionality and participant list printing. Built with procedural PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap for a responsive experience.",
    image: sports,
    alt: "Sports Registration System",
    imageStyle: "rounded-xl lg:w-5/12",
  },
];

const Projects = () => {
  return (
    <>
      { projectData.map((project, index) => (
        <Section 
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          alt={project.alt}
          imageStyle={project.imageStyle}
        />
      )) }
    </>
  )
}

export default Projects