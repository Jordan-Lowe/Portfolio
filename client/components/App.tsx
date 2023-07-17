import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/users'

function App() {
  const { isLoading, error, data } = useQuery('users', getUsers)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {data.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
