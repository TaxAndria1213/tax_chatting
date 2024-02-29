"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const user_2 = require("../middleware/user/user");
const userRouter = express_1.default.Router();
userRouter.post('/', user_2.hashPassword, user_1.createUser);
userRouter.post('/login', user_1.logUser);
exports.default = userRouter;
