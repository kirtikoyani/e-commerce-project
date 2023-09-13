"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../Controller/product/product.controller");
const authHelper_1 = require("../Middlerware/authHelper");
const productRouter = express_1.default.Router();
exports.productRouter = productRouter;
productRouter.get("/product", authHelper_1.authenticateUser, product_controller_1.getAllProduct);
productRouter.get("/product/:id", authHelper_1.authenticateUser, product_controller_1.getProductById);
productRouter.post("/product", authHelper_1.authenticateUser, product_controller_1.postProduct);
productRouter.put("/product/:id", authHelper_1.authenticateUser, product_controller_1.putProduct);
productRouter.delete("/product/:id", authHelper_1.authenticateUser, product_controller_1.deleteProduct);
//# sourceMappingURL=product.routes.js.map