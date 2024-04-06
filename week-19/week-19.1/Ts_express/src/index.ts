import express from 'express';
import usersRouter from './routes/users';

const app = express();
const PORT = 3000;


app.use('/api/users', usersRouter);


app.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Server</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Server</h1>
      </div>
    </body>
    </html>
  `);
});





app.listen(PORT,()=>{
    console.log("app is running http://localhost:3000");
})
