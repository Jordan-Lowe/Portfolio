import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/usersApi'
import AboutMe from './AboutMe'
import Logos from './Logos'

function App() {
  const { isLoading, error, data } = useQuery('users', getUsers)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <div className="app">
        <div className="bg-gray-900 w-screen min-h-screen bg-fixed bg-center bg-cover">
          <div className="mb-4 pt-8">
            <h1 className="flex text-center justify-center relative text-neutral-50 text-5xl">
              Welcome
            </h1>

            <Logos />
          </div>
          <div className="">
            <div className="p-8 text-center">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
