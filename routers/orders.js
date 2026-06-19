import express from "express";
import orderController from "../controllers/orders.js";

const orderRouter = express.Router();

orderRouter.get("/", orderController.index);
orderRouter.get("/:id", orderController.show);
orderRouter.post("/", orderController.store);
orderRouter.delete("/:id", orderController.destroy);

export default orderRouter;