"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_routes_1 = require("./product.routes");
const user_routes_1 = require("./user.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/', user_routes_1.userRouter);
router.use('/', product_routes_1.productRouter);
//# sourceMappingURL=index.routes.js.map