
const express = require('express')
const app = express()
const port = 3000

var Users = [{
    naam: "john",
    kindneys:[{
        healthy:false
    },{
        healthy:true
    }]

}]

app.get('/', (req, res) => {
  const johnkidneys = Users[0].kindneys;
  const numberofKidneys = johnkidneys.length;
  let numberOfHealthyKidneys = 0;
  for(let i =0;i<numberofKidneys; i++){
    if(johnkidneys[i].healthy){
          numberOfHealthyKidneys = numberOfHealthyKidneys +1;
    }
  }
  const numberOfUnhealthyKidneys = numberofKidneys - numberOfHealthyKidneys;
  res.json({
    numberofKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })

  console.log(johnkidneys);
})

app.post('/',(req,res)=>{

})
app.put('/',(req,res)=>{
    
})
app.delete('/',(req,res)=>{
    
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})