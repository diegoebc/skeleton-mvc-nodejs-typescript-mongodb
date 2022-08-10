import { Router, Request, Response } from "express"

const router = Router()

router.all('*',(req: Request, res: Response) => {
  res.status(404).json({
    message: 'Resource not found'
  })
})

export { router as NotFoundRoute }