import express from 'express'
import { join } from 'node:path'

import userRoutes from './routes/userRoutes'
import languageRoutes from './routes/languageRoutes'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/languages', languageRoutes)

export default server
