"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const product_routes_1 = require("./Routes/product.routes");
const user_routes_1 = require("./Routes/user.routes");
const app = (0, express_1.default)();
exports.app = app;
//Middleware
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.json());
//routes
app.use("/api", user_routes_1.userRouter);
app.use("/api", product_routes_1.productRouter);
//# sourceMappingURL=app.js.map