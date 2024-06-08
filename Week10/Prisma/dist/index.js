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
//this is the auotgenerated client which prisma has done for us. 
//Insert the user
function insertUser(email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: email,
                password: password,
                firstName: firstname,
                lastName: lastname
            },
            select: {
                id: true,
                password: true
            }
        });
        console.log(res);
    });
}
//passing two params. . . 
function update(id_1, _a) {
    return __awaiter(this, arguments, void 0, function* (id, { firstname, lastname }) {
        const post = yield prisma.user.update({
            where: { id: id },
            data: {
                firstName: firstname,
                lastName: lastname
            },
            select: {
                id: true,
                firstName: true
            }
        });
        console.log(post);
    });
}
// update(3,{
//     firstname: "Syed Insham",
//     lastname: "haque"
// });
//Delete Command 
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany({
            where: {
                email: username
            }
        });
        console.log(res);
    });
}
getUser("haqueinsham@gmail.com");
