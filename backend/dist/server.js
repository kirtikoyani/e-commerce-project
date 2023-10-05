"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = require("./Database/mongoose");
const index_routes_1 = require("./Routes/index.routes");
const app = (0, express_1.default)();
//Middleware
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
const PORT = Number(process.env.PORT);
const server = http_1.default.createServer(app);
app.use('/api', index_routes_1.router);
async function startServer() {
    await (0, mongoose_1.mongoConnect)();
    server.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
}
startServer();
//# sourceMappingURL=server.js.map