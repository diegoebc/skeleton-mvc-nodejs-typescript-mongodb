import { Router } from "express"
import { UserController } from "../controllers"

const router = Router()

router.post('/user',UserController.insertUser)
router.get('/user',UserController.getUser)

export { router as UserRoutes}

