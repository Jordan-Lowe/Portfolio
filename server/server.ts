import express from 'express'
import { join } from 'node:path'

import userRoutes from './routes/userRoutes'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/homepage', userRoutes)

export default server
