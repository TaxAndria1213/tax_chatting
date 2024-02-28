"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/routes"));
const connexion_1 = __importDefault(require("./config/connexion"));
dotenv_1.default.config();
function serverConfiguration() {
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 3000;
    app.use(express_1.default.json());
    app.use('/api', routes_1.default);
    app.listen(PORT, () => console.log(`Server is listened on : ${PORT}`));
    return app;
}
(0, connexion_1.default)();
serverConfiguration();
