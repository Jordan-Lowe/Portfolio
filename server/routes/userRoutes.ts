import { Router } from 'express'
import nodemailer from 'nodemailer'
import * as db from '../db/usersDB'
import { UserDraftInfo } from '../../models/userModels'
import dotenv from 'dotenv'
dotenv.config()

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

router.post('/', async (req, res) => {
  try {
    const userInfo: UserDraftInfo = req.body

    await db.insertData(userInfo)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jordanlowe659@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: `${userInfo.email}`,
      to: 'jordanlowe659@gmail.com',
      subject: 'New Enquiry',
      text: `
        Name: ${userInfo.name}
        Email: ${userInfo.email}
        Cell Number: ${userInfo.cellNumber}
        Enquiry: ${userInfo.enquiry || 'No enquiry provided.'}
      `,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    res.json({ message: 'Form data successfully stored and email sent.' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
