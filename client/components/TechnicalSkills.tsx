import React, { useEffect, useState } from 'react'
import { getAllLanguages } from '../apis/languageApis'

type Language = {
  id: number
  language_name: string
  language_info: string
}

type Props = {
  setSelectedLanguage: (lang: Language | null) => void
}

function TechnicalSkills({ setSelectedLanguage }: Props) {
  const [languages, setLanguages] = useState<Language[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedLanguages = await getAllLanguages()
      setLanguages(fetchedLanguages)
      if (fetchedLanguages.length > 0) {
        setSelectedLanguage(fetchedLanguages[0]) // Set first language as selected
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center h-[65vh] pt-2 z-10">
        <h2 className="mb-8 text-3xl md:text-5xl font-serif">FAQ</h2>
        <div className="w-full h-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-fuchsia-600 p-4">
          <div className="h-full w-full bg-gray-800 z-10">
            <ul className="flex flex-col justify-between h-full">
              {languages.map((language) => (
                <li
                  className="leading-loose pl-2 pr-2 text-lg md:text-2xl"
                  key={language.id}
                  onClick={() => setSelectedLanguage(language)}
                  onKeyDown={() => setSelectedLanguage(language)}
                  tabIndex={0}
                  role="button"
                >
                  {language.language_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnicalSkills
