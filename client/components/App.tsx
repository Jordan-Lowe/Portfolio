import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/usersApi'
import Logos from './Logos'
import TechnicalSkills from './TechnicalSkills'
import '../styles/AboutMe.css'

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
      <div className="app">
        <div className="bg-gray-900 w-screen min-h-screen bg-fixed bg-center bg-cover">
          <div className="mb-2 pt-20">
            <Logos />
          </div>
          <div className="flex">
            <div className="aboutMeContainer flex-grow">
              <div className="aboutMeDiv">
                
                <div className="w-3/5 left-1/2 top-1/2 leading-relaxed">
                <h1 className="text-center justify-center relative text-neutral-50 text-7xl mb-8">
                  {selectedLanguage?.language_name}
                </h1>
                  {selectedLanguage ? (
                    <p>{selectedLanguage.language_info}</p>
                  ) : (
                    'No language selected'
                  )}
                </div>
              </div>
            </div>
            <div className="flex text-neutral-50 w-1/5 top-1/2 font-semibold text-lg items-center justify-center line">
              <TechnicalSkills setSelectedLanguage={setSelectedLanguage} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
