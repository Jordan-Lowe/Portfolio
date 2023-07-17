import { Router } from 'express'

import * as db from '../db/usersDB'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllInfo()

    res.json({ users: users.map((users) => users) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
