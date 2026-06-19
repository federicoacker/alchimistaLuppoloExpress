import { Router } from "express";
import express from "express";
import productController from "../controllers/products.js";
import { checkProductSlugExists } from "../middlewares/checkProductSlugExists.js";
import { validateProductRequestPayload } from "../middlewares/validateProductRequestPayload.js";

const productRouter = express.Router();

productRouter.get("/", productController.index);

productRouter.get("/:productSlug", [checkProductSlugExists,productController.show]);

productRouter.post("/", [validateProductRequestPayload, productController.store]);

productRouter.patch("/:productSlug", productController.modify);

productRouter.delete("/:productSlug", productController.destroy);

export default productRouter;