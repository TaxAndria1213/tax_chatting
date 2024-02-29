"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.hashPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const hashPassword = (req, res, next) => {
    try {
        const { password } = req.body;
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hash = bcryptjs_1.default.hashSync(password, salt);
        req.hash = hash;
        next();
    }
    catch (error) {
        console.error(error);
    }
};
exports.hashPassword = hashPassword;
const verifyUser = (req, res, next) => {
};
exports.verifyUser = verifyUser;
