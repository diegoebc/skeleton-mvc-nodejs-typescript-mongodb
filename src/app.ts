import express from "express"
import config from "./config"
import cors from "cors"
import { UserRoutes, NotFoundRoute } from "./routes"

import { initDB } from "./db/mongo"
const app = express()


app.use(cors())
app.use(express.json())
app.use(UserRoutes)
app.use(NotFoundRoute)

const startServer = async () => {
  await initDB()
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
  })
}

startServer()
