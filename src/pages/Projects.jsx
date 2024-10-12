import React from 'react'
import login from '../assets/images/login-sys.PNG'
import Section from '../components/Section'

const Projects = () => {
  return (
    <Section title={"OOP-BASED LOGIN SYSTEM"}
      description={"I applied the MVC design pattern to develop a PHP OOP-based login system, focusing on enhancing both security and modularity. As part of the signup process, I integrated Google reCAPTCHA v2 API to prevent spam and automated registrations, ensuring that only legitimate users could create accounts. Additionally, I implemented PHPMailer to send one-time passwords (OTPs) for the 'forgot password' feature, providing a secure method for password recovery. The system was designed with scalability in mind, allowing for efficient user authentication and paving the way for future feature enhancements."} 
      image={ login }
      alt={"oop-based login system"} 
      imageStyle={"rounded-xl w-5/12"}
    />
  )
}

export default Projects