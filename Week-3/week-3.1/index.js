const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//input validation
app.post('/api/v1/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have "+ kidneyLength+ "kidneys");

    // if(username != "Aditya" || password != "pass"){
    //     res.status(400).json({"msg":"someting worng with inputs"})
    //     return
    // }

    // if(KidneyId !=1 && KidneyId != 2){
    //     res.status(400).json({"msg":"someting worng with inputs"})
    //     return
    // }
    // res.json({
    //     "msg": "your kidney is fine"
    // })

  
    // res.send("your heart is Healthy");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
