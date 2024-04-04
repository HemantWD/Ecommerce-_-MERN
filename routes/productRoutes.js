import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productConroller.js";
import formidable from "express-formidable";

const router = express.Router();

// METHOD:POST || route for creating a new product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// METHOD:PUT  || route to update the product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//*  METHOD:GET    || route to get all products
router.get("/get-product", getProductController);

//* METHOD:GET    || route to get single product
router.get("/get-product/:slug", getSingleController);

//* METHOD:GET    || get photo
router.get("/product-photo/:pid", productPhotoController);

//* METHOD:DELETE || delete a product
router.delete("/deleteProduct/:pid", deleteProductController);

//* METHOD:POST   || filter product
router.post("/product-filters", productFilterController);

//* METHOD:GET    ||  product count
router.get("/product-count", productCountController);

//* METHOD:GET    || product per page
router.get("/product-list/:page", productListController);

//* METHOD:GET    || search Product
router.get("/search/:keyword", searchProductController);

//* METHOD:GET    || get request to fetch similar products
router.get("/related-product/:pid/:cid", relatedProductController);

export default router;
