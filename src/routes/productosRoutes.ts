import express from 'express';
import { obtenerProductos } from '../controllers/productController.js';

const router = express.Router();

router.get('/', obtenerProductos);

export default router;