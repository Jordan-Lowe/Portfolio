import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUsers } from '../apis/usersApi'

function AboutMe() {
  return (
    <div>
      <p>
        My name is Jordan Lowe, I&apos;m a Software Developer based in Auckland,
        New Zealand.
        <br></br><br></br>
        Welcome to my portfolio! I&apos;m a proud graduate of Dev Academy, with
        a passion for devising innovative software solutions that resonate. My
        time at Dev Academy, filled with intensive pair programming, diverse
        team projects, and in-depth independent study, has enriched my technical
        expertise and cemented my enthusiasm for coding. My core strengths lie
        in JavaScript, TypeScript, and React, and I&apos;m continually refining
        these skills, while concurrently exploring the fascinating realm of
        Python.
        <br></br><br></br>
        My years in the bustling hospitality industry have taught me the
        importance of collaboration, clear communication, and creative
        problem-solving, valuable competencies I&apos;m eager to transfer into
        the tech sphere. As I transition into my software development career,
        I&apos;m keen to apply these transferable skills to make significant
        contributions in a vibrant team setting. Be it fine-tuning an API or
        crafting user-friendly interfaces, I&apos;m excited to embrace the
        challenges and opportunities that lie ahead!
      </p>
    </div>
  )
}

export default AboutMe
