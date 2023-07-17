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
          <div className="mb-2 pt-20">
            <Logos />
          </div>
          <div className="">
            <div className="w-3/5 left-1/2 top-1/2">
              <AboutMe />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
