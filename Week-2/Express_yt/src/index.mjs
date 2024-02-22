import  Express  from "express";

const PORT  = process.env.PORT || 3000;

const app = Express();

const mockusers = [
    {id: 1, name: 'John', displayname:'johny'},
    {id: 2, name: 'Jane', displayname:'jane'},
    {id: 3, name: 'Jack', displayname:'jack'},
    {id: 4, name: 'Jill', displayname:'jill'},
    {id: 5, name: 'Joe', displayname:'joe'},
];

const mockproducts = [
    { id:1, productName:"chicken",price:"10"},
    { id:2, productName:"fish",price:"20"},
    { id:3, productName:"beef",price:"30"},
    { id:4, productName:"pork",price:"40"},
    { id:5, productName:"mutton",price:"50"},

];


//Routes for api 
app.get('/', (req, res) => {
    res.send('Hello World!');
    // console.log(req);
    // console.log(res);
});

app.get('/api/users', (req, res) => {
    res.send(mockusers);
});

app.get('/api/product',(req,res)=>{
    res.send(mockproducts);
});

// creating Route params 

app.get('/api/users/:id', (req, res) => {
    // console.log(req.params);
    const parsedId = parseInt(req.params.id);
    if(isNaN(parsedId))
        return res.status(400).send({msg:"Bad request, invalid id"});

    
        const finduser = mockusers.find((user)=> user.id === parsedId);
        if(!finduser) return res.sendStatus(404);
        return res.send(finduser);
    
});
 

        
    

app.listen(PORT, () => {
    console.log(`Serveris  running here http://localhost:${PORT}`);
});