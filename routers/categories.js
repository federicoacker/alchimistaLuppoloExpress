import { Router } from "express";
import express from "express";
import categoryController from "../controllers/categories.js";
import { checkCategorySlugExists } from "../middlewares/checkCategorySlugExists.js";
import { validateCategoryRequestPayload } from "../middlewares/validateCategoryRequestPayload.js";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.index);

categoryRouter.get("/:categorySlug", [checkCategorySlugExists, categoryController.show]);

categoryRouter.post("/", [validateCategoryRequestPayload, categoryController.store]);

categoryRouter.delete("/:categorySlug", [checkCategorySlugExists, categoryController.destroy]);

export default categoryRouter;