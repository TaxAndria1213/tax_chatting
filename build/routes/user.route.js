"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const userRouter = express_1.default.Router();
userRouter.get('/:id', userControllers_1.getUser);
userRouter.post('/', userControllers_1.createUser);
exports.default = userRouter;
