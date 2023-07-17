import { Router } from 'express'

import * as db from '../db/languagesDB'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const languages = await db.getAllLanguages()

    res.json({ languages: languages.map((languages) => languages) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
