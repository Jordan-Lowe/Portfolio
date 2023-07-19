import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/usersApi'
import Logos from './Logos'
import TechnicalSkills from './TechnicalSkills'
import '../styles/AboutMe.css'
import ContactMe from './ContactMe'

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
      <div className="app h-screen overflow-y-scroll">
        <div className="bg-gray-900 w-full min-h-full bg-fixed bg-center bg-cover">
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
          <div className="pt-20">
            <h1 className="text-center justify-center text-neutral-50 relative text-5xl md:text-7xl mb-8">
              Welcome
            </h1>
            <Logos />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex text-neutral-50 w-full md:w-1/5 font-semibold text-3xl md:text-4xl justify-center">
              <TechnicalSkills setSelectedLanguage={setSelectedLanguage} />
            </div>
            <div className="aboutMeContainer flex-grow md:w-3/5 mx-2">
              <div className="aboutMeDiv">
                <div className="w-full md:w-3/5 mx-auto md:left-1/2 md:top-1/2 leading-relaxed">
                  <h2 className="text-center justify-center relative text-neutral-50 text-5xl md:text-5xl mb-12">
                    {selectedLanguage?.language_name}
                  </h2>
                  {selectedLanguage ? (
                    <p className="w-full">{selectedLanguage.language_info}</p>
                  ) : (
                    'No language selected'
                  )}
                </div>
              </div>
            </div>
            <div className="flex text-neutral-50 w-full md:w-1/5 md:top-1/2 font-semibold text-lg items-center justify-center z-10">
              <div className="flex flex-col items-center pt-2">
                <h2 className="mb-2 text-3xl md:text-4xl">Contact Me</h2>
                <div className="w-full md:w-1/2 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 h-[65vh] md:h-[65vh]">
                  <div className="h-full w-full justify-between flex-row bg-gray-800 z-10">
                    <ContactMe
                      handleSubmit={function (form: {
                        name: string
                        email: string
                        cellNumber: number
                        enquiry: string
                      }): unknown {
                        throw new Error('Function not implemented.')
                      }}
                    />
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
