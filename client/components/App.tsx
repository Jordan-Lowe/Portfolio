import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/usersApi'

function App() {
  const { isLoading, error, data } = useQuery('users', getUsers)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <div className="app">
        <h1>Welcome</h1>
      </div>
    </>
  )
}

export default App
