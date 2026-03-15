import express from "express";
const router = express.Router();
import { singleUpload } from "../middlewares/multer.js";
import { adminOnly } from "../middlewares/auth.js";
import { newProduct,getlatestProducts,getuniqueCategories, getadminProduct, updateProduct, deleteProduct,getsingleProduct } from "../controllers/products.js";
router.post("/new",singleUpload,newProduct)

router.get('/latest',getlatestProducts)

router.get("/categories",getuniqueCategories);

router.get("/admin-product",getadminProduct)

router.route("/:id").get(getsingleProduct).put(singleUpload,updateProduct).delete(deleteProduct)

export default router;