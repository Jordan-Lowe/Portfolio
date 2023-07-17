import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/usersApi'
import AboutMe from './AboutMe'
import Logos from './Logos'
import TechnicalSkills from './TechnicalSkills'
import '../styles/AboutMe.css'

function App() {
  const { isLoading, error, data } = useQuery('users', getUsers)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <div className="app">
        <div className="bg-gray-900 w-screen min-h-screen bg-fixed bg-center bg-cover">
          <div className="mb-2 pt-20">
            <Logos />
          </div>
          <div className="aboutMeContainer flex flex-grow">
            <div className="aboutMeDiv flex w-full">
              <h1 className="flex text-center justify-center relative text-neutral-50 text-7xl mb-8">
                Welcome
              </h1>
              <div className="w-3/5 left-1/2 top-1/2">
                <AboutMe />
              </div>
            </div>
          </div>
          <div className="text-neutral-50">
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
