"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const auth_1 = __importDefault(require("../auth"));
//sign-up schema 
const signUpSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
//sign-up Route 
userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    //safeparsing 
    const result = signUpSchema.safeParse(body);
    let user_id;
    if (result.success) {
        const email = body.email;
        //CHECKING IF THE USER WITH SAME MAIL EXISTS OR NOT 
        const response = yield prisma.user.findFirst({
            where: {
                email
            }
        });
        //CREATING THE USER IF NON-DUPLICATE CREDENTIALS 
        if (response === null) {
            const response = yield prisma.user.create({
                data: {
                    name: body.name,
                    email,
                    password: body.password
                }
            });
            user_id = response.id;
        }
        //THROWING ERROR IF DUPLICATE CREDENTIALS EXIST
        else {
            return res.status(404).json({
                msg: "User already exists"
            });
        }
    }
    //INVALID CREDENTIALS TYPE 
    else {
        return res.status(411).json({
            msg: "Bad credentials type"
        });
    }
    //creating jwt 
    const payload = {
        user_id: user_id,
        email: body.email
    };
    const token = jsonwebtoken_1.default.sign(payload, config_1.default);
    //respinding
    return res.json({
        msg: "User created successfully",
        token,
        email: body.email
    });
}));
//Implement to change the DB to change the email 
userRouter.put('/updatePassword', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const new_password = req.body.new_password;
    const email = req.body.email;
    const user = yield prisma.user.findUnique({
        where: {
            email
        }
    });
    const user_id = user === null || user === void 0 ? void 0 : user.id;
    const updateUser = yield prisma.user.update({
        where: {
            id: user_id
        },
        data: {
            password: new_password
        }
    });
    return res.json({
        msg: "Password updated successfully"
    });
    return res.status(413).json({
        msg: "Password update failed, Try again after sometime"
    });
}));
exports.default = userRouter;
