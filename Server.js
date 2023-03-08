const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/ToDoRoute')

require('dotenv')

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(
    "mongodb+srv://learning:rWzGi3WefFPCjlgY@cluster0.k4ushw7.mongodb.net/ToDoApp?retryWrites=true&w=majority"
  ) //process.env.MONGODB_UR
  .then(() => console.log("Connected"))
  .catch(() => console.log("Failed"))

app.use(routes)

app.listen(PORT, () => console.log(`listening on: ${PORT}`))
