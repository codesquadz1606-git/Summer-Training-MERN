const http=require("http");
const server=http.createServer((req,res)=>{
    res.end("This is first server\nThis is new line\nThis is Third Line")
})

server.listen(3000,()=>{
    console.log("Listening to port 3000");
})