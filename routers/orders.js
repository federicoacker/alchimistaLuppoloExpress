import express from 'express';
import { index, show } from '../controllers/orders.js';

const router = express.Router();

router.get('/', index);
router.get('/:id', index);

export default router;