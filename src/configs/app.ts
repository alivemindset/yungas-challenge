import express from 'express'
import { router } from '../routes'
import Database from './database'

const app = express()
const db = new Database()

app.use(express.json())
app.use(router)

export { app, db }
