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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(firtName, lastName, username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.users.create({
            data: {
                firtName,
                lastName,
                username,
                password
            }
        });
        console.log(response);
    });
}
// createUser("test","test","test","test");
function addTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.todo.create({
            data: {
                Task: 'Learn DSA',
                Description: 'Learn DSA',
                user_id: 1
            }
        });
        console.log(response);
    });
}
// addTodo();
function gettodouserdetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.users.findMany({
            where: {
                id: 1
            },
            select: {
                id: true,
                firtName: true,
                todos: true
            }
        });
        console.log(response);
    });
}
gettodouserdetails();
