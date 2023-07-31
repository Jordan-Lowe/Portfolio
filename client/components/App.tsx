import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import TechnicalSkills from './TechnicalSkills'
import '../styles/AboutMe.css'
import NavBar from './NavBar'

type LanguageInfo = {
  id: number
  language_name: string
  language_info: string
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageInfo | null>(
    null,
  )

  return (
    <>
      <div className="app h-screen w-full md:w-screen md:h-screen overflow-y-scroll">
        <div className="bg-fuchsia-950 flex-wrap w-full min-h-full bg-fixed bg-center bg-cover">
          <div className="custom-shape-divider-top-1689743221">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="flex flex-wrap mt-14 justify-between items-center w-4/5 mx-auto">
            <h1 className="left-1/4 flex flex-wrap mt-[2%] text-neutral-50 relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
              Hello, I&apos;m Jordan Lowe
            </h1>
          </div>
          <div className="flex flex-col md:flex-row p-4 md:p-8">
            <div className="flex flex-row mt-8 md:mt-12 md:flex-row">
              <div className="flex  text-neutral-50 w-full md:w-1/3 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <TechnicalSkills setSelectedLanguage={setSelectedLanguage} />
              </div>
              <div className="aboutMeContainer justify-center items-center mt-6 md:mt-0 md:ml-8 lg:ml-16">
                <div className="aboutMeDiv justify-center pt-6 md:pt-12">
                  <div className="w-full md:w-4/5 mx-auto md:left-1/2 md:top-1/2">
                    <h2 className="text-center  font-bold justify-center relative text-neutral-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-12">
                      {selectedLanguage?.language_name}
                    </h2>
                    {selectedLanguage ? (
                      <p className="w-full text-xl sm:text-2xl md:text-3xl tracking-wide leading-relaxed">
                        {selectedLanguage.language_info}
                      </p>
                    ) : (
                      'No language selected'
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap z-10 mt-6 md:mt-0">
              <div className="flex flex-wrap h-screen -right-0 absolute top-0 text-base sm:text-lg md:text-xl text-neutral-50 z-10">
                <div className="flex flex-col">
                  <div className="rounded-md h-full bg-gradient-to-tr from-pink-500 via-red-500 to-fuchsia-600 pl-4 ">
                    <div className="flex h-full flex-col bg-fuchsia-950 z-10">
                      <NavBar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
