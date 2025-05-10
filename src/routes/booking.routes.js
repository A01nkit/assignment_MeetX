import {Router} from "express"
import {auth} from '../middlewares/auth.middleware.js'
import { bookActivity, getMyBookings } from '../controllers/booking.controller.js'


const router = Router()

router.post('/', auth, bookActivity);
router.get('/', auth, getMyBookings);

export default router;