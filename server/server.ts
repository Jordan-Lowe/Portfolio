import express from 'express'
import { join } from 'node:path'
import cors from 'cors'

import languageRoutes from './routes/languageRoutes'

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/languages', languageRoutes)

export default server
