"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const JWT_SECRET = 'Aditya_kumar';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use(cors({
//     credentials: true,
//     origin: "http://localhost:5173"
// }));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../src/index.html"));
});
//dummy signin endpoint 
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //do validation using db 
    const token = jsonwebtoken_1.default.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Loged in");
});
// add a protected a backend route 
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    // Get email of the user from the database
    res.send({
        userId: decoded.id
    });
});
app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    });
});
app.listen(3000);
