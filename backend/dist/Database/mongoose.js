"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = process.env.MONGO_URI;
async function mongoConnect() {
    await mongoose_1.default
        .connect(MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        console.log("Database Connection is ready...");
    })
        .catch((err) => {
        console.log(err);
    });
}
exports.mongoConnect = mongoConnect;
//# sourceMappingURL=mongoose.js.map