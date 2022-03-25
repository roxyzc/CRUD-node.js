import express from 'express';
import {getApi, getApiById, saveApi, updateApi, deleteApi} from '../controllers/controllers.js';
const router = express.Router();

router.get('/', getApi);
router.get('/:id', getApiById);
router.post('/', saveApi);
router.patch('/:id', updateApi);
router.delete('/:id', deleteApi);

export default router;