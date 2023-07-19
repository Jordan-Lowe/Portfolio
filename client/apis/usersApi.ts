import axios from 'axios'

const rootUrl = '/api/v1/users'

export async function getUsers(): Promise<string[]> {
  const { data } = await axios.get(rootUrl)
  return data.users
}

// Add this new function
export async function addUser(user: any) {
  return axios.post(rootUrl, user)
}
