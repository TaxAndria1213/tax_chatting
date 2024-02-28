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
exports.login = exports.create = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function hashPassword(pass) {
    const salt = bcryptjs_1.default.genSaltSync(10);
    const hash = bcryptjs_1.default.hashSync(pass, salt);
    return hash;
}
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
            password: hashPassword(password)
        });
        const savedUser = yield newUser.save();
        return savedUser;
    }
    catch (error) {
        throw console.log(error);
    }
});
exports.create = create;
const login = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mail, password } = userData;
        const logUser = user_1.default.findOne({});
    }
    catch (error) {
        throw console.log(error);
    }
});
exports.login = login;
