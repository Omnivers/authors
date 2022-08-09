const express=require('express')
const app=express()
const authors=require('../authors.json')



app.get('/:id',(req,res)=>{
    const {id}=req.params
    const author = authors.find(author => author.id === Number(id))

    if (author) {
      res.json(`${author.name}, ${author.nationality}`)
    } else {
      res.status(404).send('Not found')
    }
})






module.exports=app