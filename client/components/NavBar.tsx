import React, { useState } from 'react'
import ContactMe from './ContactMe'
import Projects from './Projects'

function NavBar() {
  const [activeSection, setActiveSection] = useState(null)

  const CV_Logo = 'public/Images/curriculum-vitae-resume-svgrepo-com.svg'

  const toggleSection = (sectionName: string | React.SetStateAction<null>) => {
    if (activeSection === sectionName) {
      setActiveSection(null)
    } else {
      setActiveSection(sectionName)
    }
  }

  return (
    <div className="navContainer flex flex-col h-screen">
      <div className="navBar h-full flex  bg-full items-center">
        <ul className='flex flex-col px-4 pt-8'>
          <li className="navItem  w-full flex pt-8 justify-evenly ">
            <ContactMe
              isActive={activeSection === 'contactMe'}
              onToggle={() => toggleSection('contactMe')}
            />
          </li>
          <li className="navItem pt-8 top-1/2">
            <Projects
              isActive={activeSection === 'projects'}
              onToggle={() => toggleSection('projects')}
            />
          </li>
          <li className="Cv flex pt-8 top-3/4">
            <a
              href="public/Pdf/Jordan Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
              className='flex justify-center'
                src={CV_Logo}
                alt="CV logo"
                style={{width: '5vw', height: '7vh' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
