import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/usersApi'
import Logos from './Logos'
import TechnicalSkills from './TechnicalSkills'
import '../styles/AboutMe.css'
import NavBar from './NavBar'

type LanguageInfo = {
  id: number
  language_name: string
  language_info: string
}

function App() {
  const { isLoading, error, data } = useQuery('users', getUsers)
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageInfo | null>(
    null,
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <div className="app h-screen w-screen overflow-y-scroll">
        <div className="bg-fuchsia-950 w-full min-h-full bg-fixed bg-center bg-cover">
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
          <div className="flex mt-12 justify-between items-center w-4/5">
            <h1 className="left-1/4 text-center justify-center items-center text-neutral-50 relative text-5xl md:text-7xl font-serif">
              Hello, I&apos;m Jordan Lowe
            </h1>
            <Logos />
          </div>
          <div className="flex flex-col md:flex-row p-8">
            <div className="flex flex-row mt-12 flex-shrink">
              <div className="flex  text-neutral-50 w-full md:w-1/3 font-semibold text-3xl md:text-4xl mr-16">
                <TechnicalSkills setSelectedLanguage={setSelectedLanguage} />
              </div>
              <div className="aboutMeContainer justify-center items-center flex-shrink">
                <div className="aboutMeDiv justify-center pt-12">
                  <div className="w-full md:w-4/5 mx-auto md:left-1/2 md:top-1/2">
                    <h2 className="text-center font-serif font-bold justify-center relative text-neutral-50 text-5xl md:text-5xl mb-12">
                      {selectedLanguage?.language_name}
                    </h2>
                    {selectedLanguage ? (
                      <p className="w-full font-serif font-semibold text-2xl tracking-wide leading-relaxed">
                        {selectedLanguage.language_info}
                      </p>
                    ) : (
                      'No language selected'
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex z-10">
              <div className="flex h-screen font-semibold right-0 fixed top-0 text-lg text-neutral-50 z-10">
                <div className="flex flex-col">
                  <div className=" rounded-md h-full bg-gradient-to-tr from-pink-500 via-red-500 to-fuchsia-600 pl-4">
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
