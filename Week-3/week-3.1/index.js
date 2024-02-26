const express = require('express');
const zod = require('zod');
const app = express();
const port = 3000;

//creating zod schema for input validation

const schema = zod.array(zod.number());

app.use(express.json());

//input validation
app.post('/api/v1/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    })

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

//global catches == another middlewaare taht take care of any exceptin
// and gives client a pretty good response 
app.use(function(err,req,res,next){
    res.json({
        msg:"something went wrong"
    })
});


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
