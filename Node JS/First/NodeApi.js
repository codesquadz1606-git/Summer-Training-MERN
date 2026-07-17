// How many req are their in API : GET , POST , PUT , PATCH , DELETE
import http from 'http'

let users=[
    {
        id:101,
        name:"Kartikey"
    },
    {
        id:102,
        name:"Yug"
    }
]

const server=http.createServer((req,res)=>{
    if(req.url==="/users" && req.method==="GET"){
        res.writeHead(200,{
            'content-type':'application/json'
        })

        return res.end(JSON.stringify(users));
    }
})

server.listen(3000,()=>{
    console.log("Listening to Port 3000");
})