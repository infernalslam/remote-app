import { Router } from 'express'
import users from './users'
import queryFromYoutube from './youtube.controller.js'
const router = Router()

// Add USERS Routes
// router.use(users)
router.use(users)
router.use(queryFromYoutube)

export default router
