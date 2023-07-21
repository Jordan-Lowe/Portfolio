import React, { useState } from 'react'
import ContactMe from './ContactMe'

function NavBar() {
  const [activeSection, setActiveSection] = useState(null)

  const CV_Logo = 'public/Images/curriculum-vitae-resume-svgrepo-com.svg'
  const GITHUB_LOGO = 'public/Images/github-mark-white.svg'
  const Linkdein_Logo = 'public/Images/linkedin-icon-2.svg'
  const Projects_logo = 'public/Images/task-list-menu-document-svgrepo-com.svg'

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
          <li className="navItem  w-full flex justify-center">
            <a
              href="https://github.com/Jordan-Lowe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GITHUB_LOGO}
                alt="Github logo"
                style={{ width: '3vw', height: '6vh' }}
              />
            </a>
          </li>
          <li className="navItem  w-full flex  justify-center">
            <a
              href="https://www.linkedin.com/in/jordanlowe5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Linkdein_Logo}
                alt="Linkdein logo"
                style={{ width: '4vw', height: '6vh' }}
              />
            </a>
          </li>
          <li className="navItem  w-full flex  justify-center">
            <ContactMe
              isActive={activeSection === 'contactMe'}
              onToggle={() => toggleSection('contactMe')}
            />
          </li>
          <li className="navItem  top-1/2 text-center max-w-md justify-center">
            <a
              href="https://github.com/kahikatea-2023/pinky-promise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Projects_logo}
                alt="Projects logo"
                style={{ width: '5vw', height: '7vh' }}
              />
            </a>
          </li>
          <li className="Cv flex  justify-center">
            <a
              href="public/Pdf/Jordan Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="flex justify-center"
                src={CV_Logo}
                alt="CV logo"
                style={{ width: '5vw', height: '7vh' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
