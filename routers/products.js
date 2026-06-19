import { Router } from "express";
import express from "express";
import productController from "../controllers/products";

const productRouter = express.Router();

productRouter.get("/", productController.index);

productRouter.get("/:productSlug", productController.show);

productRouter.post("/", productController.store);

productRouter.patch("/:productSlug", productController.modify);

productRouter.delete("/:productSlug", productController.destroy);

export default productRouter;