require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')

const router = require('./components')

app.use(
  cors({
    origin: '*',
    credentials: true,
    exposedHeaders: ['Set-Cookie', 'X-Total-Count']
  })
)
app.use(express.json())

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/', (req, res) => {
  try {
    res.send('Welcome to Users')
    
  } catch (e) {
    res.send(e)
  }
})

app.use('/api/v1/', router)

const startApp = () => {
  try {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, console.log(`Server started at port ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}

startApp()
