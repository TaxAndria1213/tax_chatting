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
exports.logUser = exports.createUser = void 0;
const user_1 = require("../services/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        newUser.password = req.hash;
        const response = yield (0, user_1.create)(newUser);
        res.status(201)
            .header("Content-Type", "application/json")
            .json(response);
    }
    catch (error) {
        res.status(400).json({ message: "erreur" });
    }
});
exports.createUser = createUser;
const logUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const loginUser = yield (0, user_1.getUser)(userData);
        if (loginUser === null) {
            throw Error;
        }
        const hash = loginUser.password;
        const isTrueUser = bcryptjs_1.default.compareSync(userData.password, hash);
        if (isTrueUser) {
            res.status(200)
                .header("Content-Type", "application/json")
                .json({ message: "Authentification réussite" });
        }
        else {
            throw Error;
        }
    }
    catch (error) {
        res.status(401).json({ message: "e-mail ou mot de passe incorrect !" });
    }
});
exports.logUser = logUser;
