"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(411).json({
            msg: "No input token recieved"
        });
    }
    const token = authHeader;
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default);
    if (!decoded) {
        return res.status(403).json({
            msg: "Invalid inputs"
        });
    }
    req.user = decoded;
    next();
};
exports.default = authMiddleware;
