import React, { useEffect, useState } from 'react'
import { getAllLanguages } from '../apis/languageApis'

type Language = {
  id: number
  language_name: string
  language_info: string
}

function TechnicalSkills() {
  const [languages, setLanguages] = useState<Language[]>([])
  const [languageInfo, setLanguageInfo] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const fetchedLanguages = await getAllLanguages()
      setLanguages(fetchedLanguages)
    }
    fetchData()
  }, [])

  return (
    <>
      <div>
      <ul>
  {languages.map((language) => (
    <li 
      key={language.id} 
      onClick={() => setLanguageInfo(language.language_info)}
      onKeyDown={() => setLanguageInfo(language.language_info)}
      tabIndex={0} 
      role="button"
    >
      {language.language_name}
    </li>
  ))}
</ul>

        {languageInfo && <p>{languageInfo}</p>}
      </div>
    </>
  )
}

export default TechnicalSkills
