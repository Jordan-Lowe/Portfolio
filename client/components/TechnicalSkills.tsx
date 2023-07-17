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
      <div className="flex text-center right-full pt-2 justify-center ">
        <h2 className="flex justify-center mb-8 text-4xl">Skills</h2>
        <ul className="border-2 border-cyan-50">
          {languages.map((language) => (
            <li
              className="mb-8 pl-2 pr-2 "
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
    </>
  )
}

export default TechnicalSkills
