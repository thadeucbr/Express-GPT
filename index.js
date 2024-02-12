import express from 'express'

import OpenAI from 'openai'
import errorHander from './errorHandler.js'
import validateInput from './validateInput.js'

const API_KEY = process.env.API_KEY

export const openai = new OpenAI( {apiKey: API_KEY} )

const app = express()

function asyncHandler(fn) {
  return function (req, res, next) {
    return Promise
      .resolve(fn(req, res, next))
      .catch(next);
  }
}

app.use(express.json())

app.get('/', (req, res) => { 
  res.send('Hello World')
})

app.post('/user', asyncHandler(validateInput), asyncHandler(async (req, res, next) => { 
  try {
    res.status(201).json(req.body)
  } catch (err) {
    console.log(err)
    next(err)
  }
}))

app.use(errorHander)
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})