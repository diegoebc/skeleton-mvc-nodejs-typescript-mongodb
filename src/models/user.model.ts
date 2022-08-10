import { model, Schema } from "mongoose"

const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  description: {
    type: String
  }
}, {
  timestamps: true
})

const UserModel = model("user", UserSchema)

export { UserModel }
