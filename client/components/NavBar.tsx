import React, { useState } from 'react'
import ContactMe from './ContactMe'
import { TiLightbulb } from 'react-icons/ti'
import '../styles/AboutMe.css'

function NavBar() {
  const [activeSection, setActiveSection] = useState(null)

  const CV_Logo = 'public/Images/curriculum-vitae-resume-svgrepo-com.svg'
  const GITHUB_LOGO = 'public/Images/github-mark-white.svg'
  const Linkdein_Logo = 'public/Images/linkedin-icon-2.svg'

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
                className="navImg w-[3vw] h-[6vh] hover:scale-125 transition duration-300 ease-in-out"
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
                className="navImg w-[3vw] h-[6vh] hover:scale-125 transition duration-300 ease-in-out"
                src={Linkdein_Logo}
                alt="Linkdein logo"
              />
            </a>
            <div className="sideBarIcon group-hover:scale-100">
              <TiLightbulb className="yellow-icon" />
              Linkdein
            </div>
          </li>
          <li className="navItem  w-full flex  justify-center group">
            <ContactMe
              isActive={activeSection === 'contactMe'}
              onToggle={() => toggleSection('contactMe')}
            />

            <div
              className={`sideBarIcon group-hover:scale-100 ${
                activeSection === 'contactMe'
                  ? 'hidden-but-visible-on-hover'
                  : ''
              }`}
            >
              <TiLightbulb className="yellow-icon" />
              Email
            </div>
          </li>

          <li className="Cv flex  justify-center group">
            <a
              href="public/Pdf/Jordan Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="flex justify-center navImg w-[5vw] h-[7vh] hover:scale-125 transition duration-300 ease-in-out"
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
