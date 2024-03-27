import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, {JwtPayload} from "jsonwebtoken";
import path from "path";

const JWT_SECRET = 'Aditya_kumar';


const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//     credentials: true,
//     origin: "http://localhost:5173"
// }));

app.get("/", (req, res) => {
   
    res.sendFile(path.join(__dirname, "../src/index.html"));
})

 

//dummy signin endpoint 
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //do validation using db 

    const token = jwt.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Loged in");
});

// add a protected a backend route 
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // Get email of the user from the database
    res.send({
        userId: decoded.id
    })
});


app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    })
});

app.listen(3000);