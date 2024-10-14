import React from 'react'
import Section from '../components/Section'
import WebIntern from '../assets/images/web-intern-cdm.jpg'
import QAIntern from '../assets/images/qa-intern-ascensoft.jpg'
import WebInternTwo from '../assets/images/intern-lwli.jpg'
import WebInternTest from '../assets/images/web-intern-test.jpg'

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Colegio de Muntinlupa",
    description: "As an intern at Colegio de Muntinlupa, I collaborated with a team of five to develop the official school website. I crafted the hero section using Tailwind CSS, GSAP, and Particles.js while ensuring backend functionality through Postman testing. Additionally, I trained two team members in Git, enhancing our code collaboration.",
    image: WebIntern,
    alt: "Web Dev Intern @ CDM",
  },
  {
    title: "Web Developer Intern",
    company: "Lambert Williams Logistics, Inc.",
    description: "As a Web Developer Intern, I created a responsive landing page for the company’s business card QR code using HTML, CSS, and Bootstrap. Additionally, I developed a Warehouse Management System (WMS) with Ext JS, CodeIgniter, and MySQL to efficiently manage over 300 inventory records. Throughout the project, I utilized JIRA for task management and tracking.",
    image: WebInternTest,
    alt: "Web Dev Intern @ LWLI",
  },
  {
    title: "Software QA Intern",
    company: "Ascensoft Inc.",
    description: "During my time at Ascensoft Inc., I worked remotely as a QA intern for a P&G project. I followed testing tasks through the GitHub Kanban board and manually tested 5-8 features weekly to ensure functionality and regression stability. I also created test cases, identified bugs, and provided detailed feedback to developers, ensuring smooth product releases.",
    image: QAIntern,
    alt: "QA Intern @ Ascensoft Inc.",
  },
];

const Experience = () => {
  return (
    <>
      { experiences.map((exp, index) => (
        <Section
          key={index}
          title={exp.title}
          company={exp.company}
          description={exp.description}
          image={exp.image}
          alt={exp.alt}
          imageStyle="rounded-xl lg:w-1/3"
        />
      )) }
    </>
  )
}

export default Experience