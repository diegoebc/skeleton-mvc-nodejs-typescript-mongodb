import { UserService } from "../services"
import { Request, Response } from "express"

export const insertUser = async (req: Request, res: Response) => {
  const { body } = req
  const user = await UserService.registerUser(body)
  if(!user){
    res.status(500).json({message: 'Error creating user'})
    return
  }
  res.status(201).json({user})
}

export const getUser = async (req: Request, res: Response) => {
  const { query: { email } } = req
  const user = await UserService.getUserDetail(`${email}`)
  if(!user){
    res.status(404).json({message: 'User not found'})
    return
  }
  res.status(200).json({user})
}
