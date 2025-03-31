import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const app = express()

app.use(routes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
