import express from 'express'
import UsersController from '../controller/users_controller'

const router = express.Router()

router.get('/', UsersController.getAll)
router.get('/:id', UsersController.get)
router.post('/', UsersController.post)
router.put('/:id', UsersController.put)
router.delete('/:id', UsersController.delete)

export default router
