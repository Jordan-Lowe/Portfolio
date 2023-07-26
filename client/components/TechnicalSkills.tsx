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
        setSelectedLanguage(fetchedLanguages[0])
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center z-10 w-full px-8">
        <div className="w-full h-full rounded-md bg-gradient-to-r from-[#034078] via-[#c6d8af] to-[#5998c5] p-8">
          <div className="h-full w-full bg-fuchsia-950 z-10 flex flex-col flex-grow">
            <h2 className="pt-4 text-4xl md:text-4xl text-center ">FAQ</h2>
            <ul className="flex flex-col justify-evenly h-full">
              {languages.map((language) => (
                <li
                  className="pl-8 pr-2 text-2xl md:text-2xl hover:scale-105 transition duration-300 ease-in-out"
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
