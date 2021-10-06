import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//this is already products route because of
//app.use("api/products", productRoutes);
//so this gets api/products/

//@desc fetch all products
//@route GET api.products
//@acess public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    //could put try/catch but we need to catch in all routes
    //to make it easier we will use express-async handler middleware
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc fetch single product
//@route GET api.products/:id
//@acess public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
