import React from 'react'
import login from '../assets/images/login-sys.PNG'
import sports from '../assets/images/sports-reg.PNG'
import Section from '../components/Section'

const projectData = [
  {
    title: "OOP-BASED LOGIN SYSTEM",
    description: "I applied the MVC design pattern to develop a PHP OOP-based login system, focusing on enhancing both security and modularity. As part of the signup process, I integrated Google reCAPTCHA v2 API to prevent spam and automated registrations, ensuring that only legitimate users could create accounts. Additionally, I implemented PHPMailer to send one-time passwords (OTPs) for the 'forgot password' feature, providing a secure method for password recovery. The system was designed with scalability in mind, allowing for efficient user authentication and paving the way for future feature enhancements.",
    image: login,
    alt: "OOP-Based Login System",
    imageStyle: "rounded-xl w-5/12",
  },
  {
    title: "SPORTS REGISTRATION SYSTEM",
    description: "I developed the Sports Registration System for a group of junior-year Computer Engineering students enrolled in a Software Design class. Faced with a tight deadline, I created a solution that included full CRUD functionality for managing sports registrations. A key feature of the system was the ability to print participant lists, making it easier for event organizers to access and share information. I built the application using procedural PHP for the backend and MySQL for data storage, while the frontend was designed with HTML, CSS, JavaScript, and Bootstrap to ensure a responsive and user-friendly experience.",
    image: sports,
    alt: "Sports Registration System",
    imageStyle: "rounded-xl w-5/12",
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