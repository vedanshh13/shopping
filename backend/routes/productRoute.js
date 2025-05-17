import express from 'express';
import upload from '../middleware/multer.js';  // Correct import for multer
import { addProduct, listProducts, singleProduct, removeProduct } from '../controllers/productController.js';
import adminAuth from '../middleware/adminAuth.js';

console.log("main yaha hu 3")

const productRouter = express.Router();
console.log("mai yaha hu 2")

// Route to add a product with image uploads
productRouter.post('/add', adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addProduct);

// Route to list all products
productRouter.get('/list', listProducts);

// Route to get a single product by ID
productRouter.post("/single", adminAuth, singleProduct);

// Route to remove a product
productRouter.post('/remove', adminAuth, removeProduct);

export default productRouter;
