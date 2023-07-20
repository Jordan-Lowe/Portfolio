import React, { useEffect, useState } from 'react'
import '../styles/AboutMe.css'

const Projects_logo = 'public/Images/task-list-menu-document-svgrepo-com.svg'

function Projects({ isActive, onToggle }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="projectHeader" onClick={onToggle}>
          <button className="bg-transparent border-0">
            <img
              src={Projects_logo}
              alt="Contact Me logo"
              style={{ width: '5vw', height: '7vh' }}
            />
          </button>
        </div>
        {isActive && (
          <div className="projectContent">
            <ul className="">
              <h4>Pinky Promise</h4>
              <p>
                During the final week at Dev Academy, I collaborated with a team
                of four on a task to deliver a full-stack application in seven
                days. The project culminated with a presentation in front of an
                audience of approximately 70 people. <br></br>
                <br></br>
                We embraced Agile methodologies to manage our project
                effectively. <br></br>Each day began with a stand-up meeting
                where we discussed our individual tasks, progress, and potential
                bottlenecks. We then decided who could assist whom to ensure the
                project&apos;s smooth progression.<br></br>
                <br></br>
                Our workflow also involved the use of GitHub for ticketing,
                allocating tasks among the team members. Regular code reviews
                were an integral part of our process, reinforcing software
                quality and providing an excellent opportunity to practice
                giving and receiving feedback. This environment highlighted my
                adaptability and reinforced my capacity for rapid learning.
                <br></br>
                <br></br>
                An exemplary moment of my quick learning aptitude was my
                decision to incorporate a new technology, Tailwind, into our
                project. Despite my limited prior exposure, I adapted quickly,
                demonstrating my capacity to learn under pressure and my
                eagerness to broaden my technical skills.<br></br>
                <br></br>
                To ensure robustness and reliability of our application, we
                implemented Test-Driven Development {`(TDD)`}. This involved
                clearly defining the purpose of each story or test, writing the
                test cases, and then crafting the code to meet the tests. This
                process highlighted my understanding of essential software
                development practices and my ability to write reliable, testable
                code. <br></br>
                <br></br>
                This intensive project experience not only consolidated my
                technical skills but also enhanced my understanding of effective
                project management, teamwork, and agile practices. I look
                forward to leveraging these skills and experiences in my future
                role. <br></br>
                <br></br>
                Link to project on GitHub:{' '}
                <a
                  href="https://github.com/kahikatea-2023/pinky-promise"
                  rel="Link to Porject"
                >
                  Pinky Promise
                </a>
              </p>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Projects
