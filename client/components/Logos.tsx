import React from 'react'

const GITHUB_LOGO = 'public/Images/github-mark-white.svg'
const Linkdein_Logo = 'public/Images/linkedin-icon-2.svg'

const Logos = () => {
  return (
    <>
      <div className="flex flex-row justify-end mr-20 ">
        <ul className="flex z-10">
          <li className="gitHub mr-4">
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
          <li className="Linkdein">
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
        </ul>
      </div>
    </>
  )
}

export default Logos
