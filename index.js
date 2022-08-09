const express= require('express');
const app=express();
const port=5000;
const authorsRoute= require('./routes/authors')


app.listen(port, () => {
    console.log(`Authors API Port : ${port}`)
  })
app.get('/',(req,res)=>{
  res.send('test')
})
app.use('/authors',authorsRoute)

