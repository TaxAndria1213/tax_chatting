"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    mongoose_1.default.connect('mongodb://127.0.0.1:27017/tax_chatting').then((res) => { console.log("connexion réussite"); }).catch((err) => console.log("erreur"));
}
exports.default = connect;
