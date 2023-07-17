import axios from 'axios'


const rootUrl = '/api/v1/languages'

type Language = {
  id: number;
  language_name: string;
  language_info: string;
}


export async function getAllLanguages(): Promise<Language[]> {
  const { data } = await axios.get(rootUrl)
  return data.languages
}

