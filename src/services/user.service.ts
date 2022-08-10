import { UserModel } from "../models"
import { UserType }  from "../types"

export const registerUser = async (user: UserType) => {
  const response = await UserModel.create(user)
  return response
}

export const getUserDetail = async (email: string) => {
  const user = await UserModel.findOne({email})
  return user
}