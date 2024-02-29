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
exports.getUser = exports.create = void 0;
const user_1 = __importDefault(require("../models/user"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
/**
 * userData example
 * @param userData = {
    "name": "value",
    "firstName": "value",
    "mail": "value",
    "password": "value"
}
 */
const create = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, firstName, mail, password } = userData;
        const newUser = new user_1.default({
            name: name,
            firstName: firstName,
            mail: mail,
            password: password
        });
        const savedUser = yield newUser.save();
        return savedUser;
    }
    catch (error) {
        throw console.log(error);
    }
});
exports.create = create;
const getUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mail, password } = userData;
        const logUser = user_1.default.findOne({
            mail: mail
        });
        return logUser;
    }
    catch (error) {
        throw console.log(error);
    }
});
exports.getUser = getUser;
