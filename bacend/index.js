import express from "express"
import cors from 'cors'

const app=express();

app.use(cors())
 app.use(express.static('disc'));
// app.get('/', (req,res)=>{
//     res.send("hello");
// })
app.get('/api/joks',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"why was the math book sad?",
            content:"because it had"
        },
        {
            id:2,
            title:"why was the math book sad?",
            content:"because it had"
        },
        {
            id:3,
            title:"why was the math book sad?",
            content:"because it had"
        },
        {
            id:4,
            title:"why was the math book sad?",
            content:"because it had"
        },
    ]
    res.send(jokes);

})

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})

