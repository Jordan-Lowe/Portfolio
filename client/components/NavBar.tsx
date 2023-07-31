import React, { useState } from 'react'
import { TiLightbulb } from 'react-icons/ti'
import '../styles/AboutMe.css'

function NavBar() {
  const [activeSection, setActiveSection] = useState(null)

  const CV_Logo = 'public/Images/curriculum-vitae-resume-svgrepo-com.svg'
  const GITHUB_LOGO = 'public/Images/github-mark-white.svg'
  const Linkdein_Logo = 'public/Images/linkedin-icon-2.svg'
  const Form_logo = 'public/Images/gmail-icon-logo-svgrepo-com.svg'

  const toggleSection = (sectionName: string | React.SetStateAction<null>) => {
    if (activeSection === sectionName) {
      setActiveSection(null)
    } else {
      setActiveSection(sectionName)
    }
  }

  return (
    <div className="navContainer flex flex-col h-screen">
      <div className="navBar h-full flex  bg-full">
        <ul className="flex flex-col px-4 justify-evenly">
          <li className="navItem  w-full flex justify-center group">
            <a
              href="https://github.com/Jordan-Lowe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="navImg  w-16 h-18 sm:w-18 sm:h-20 md:w-20 md:h-22 hover:scale-125 transition duration-300 ease-in-out"
                src={GITHUB_LOGO}
                alt="Github logo"
              />
            </a>

            <div className="sideBarIcon group-hover:scale-100">
              <TiLightbulb className="yellow-icon" />
              Github
            </div>
          </li>
          <li className="navItem  w-full flex  justify-center group">
            <a
              href="https://www.linkedin.com/in/jordanlowe5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="navImg  w-16 h-20 sm:w-18 sm:h-22 md:w-20 md:h-24 hover:scale-125 transition duration-300 ease-in-out"
                src={Linkdein_Logo}
                alt="Linkedin logo"
              />
            </a>
            <div className="sideBarIcon group-hover:scale-100">
              <TiLightbulb className="yellow-icon" />
              Linkedin
            </div>
          </li>
          <li className="Cv flex  justify-center group">
            <a
              href="https://forms.gle/UQDfrossS5JPVno3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="flex justify-center navImg w-16 h-20 sm:w-18 sm:h-22 md:w-20 md:h-24 hover:scale-125 transition duration-300 ease-in-out"
                src={Form_logo}
                alt="Form logo"
              />
            </a>

            <div className="sideBarIcon group-hover:scale-100">
              <TiLightbulb className="yellow-icon" />
              Contact
            </div>
          </li>

          <li className="Cv flex  justify-center group">
            <a
              href="public/Pdf/Jordan Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="flex justify-center navImg  w-18 h-22 sm:w-20 sm:h-24 md:w-22 md:h-24 hover:scale-125 transition duration-300 ease-in-out"
                src={CV_Logo}
                alt="CV logo"
              />
            </a>
            <div className="sideBarIcon group-hover:scale-100">
              <TiLightbulb className="yellow-icon" />
              Resume
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
