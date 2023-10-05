"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
// Authentication middleware
const authenticateUser = async (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Authentication failed" });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        next();
    }
    catch (e) {
        res.status(401).json({ error: "Authentication failed" });
    }
};
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=authHelper.js.map