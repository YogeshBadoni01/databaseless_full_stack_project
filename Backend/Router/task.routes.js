import {Router} from "express"
import { deleteTask, getAllTask, getTask, setTask, updateTask } from '../Controller/task.controller.js'
const router = Router()

router.route("/").get(getAllTask)
router.route("/:id").get(getTask)
router.route("/").post(setTask)
router.route("/:id").patch(updateTask)
router.route("/:id").delete(deleteTask)

export default router
