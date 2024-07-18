"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummy = void 0;
const express_1 = __importDefault(require("express"));
const rootRouter = express_1.default.Router();
const user_1 = __importDefault(require("./user"));
rootRouter.use('/user', user_1.default);
rootRouter.get('/health', (req, res) => {
    res.status(200).json({
        msg: "Router server is healthy"
    });
});
exports.default = rootRouter;
exports.dummy = 0;
