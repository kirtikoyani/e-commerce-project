"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const http_1 = __importDefault(require("http"));
const mongoose_1 = require("./Database/mongoose");
const app_1 = require("./app");
const PORT = Number(process.env.PORT);
const server = http_1.default.createServer(app_1.app);
async function startServer() {
    await (0, mongoose_1.mongoConnect)();
    server.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
}
startServer();
//# sourceMappingURL=server.js.map