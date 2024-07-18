"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/app', index_1.default);
app.get('/health', (req, res) => {
    res.status(200).json({
        msg: "Server is healthy"
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
