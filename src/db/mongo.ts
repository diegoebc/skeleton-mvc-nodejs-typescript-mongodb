import {connect} from "mongoose";
import config from "../config"

const initDB = async () => {
  if(!config.MONGO_URI){
    console.error(`MONGO_URI environment variable not set`)
    process.exit(1)
  }
  try {
    await connect(config.MONGO_URI)
    console.log(`Connected to MongoDB`)
  } catch (error) {
    console.error(`Error connecting MongoDB, please configure MONGO_URI environment variable in .env file`)
    process.exit(1)
  }
}

export { initDB }