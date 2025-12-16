
const http = require('http')
const fs = require('fs')
const { buffer } = require('stream/consumers')
const server =http.createServer((req,res)=>{
    if(req.url ==='/' && req.method === 'GET'){
res.setHeader('Content-Type','text/html')
    res.write(`  <h1>Form</h1>
    <form action="/user-data" method ='POST'>
        <label for="username">Enter Username: </label><input type="text" id="username"name='username' placeholder="Enter Username">
        <br>
        <br>
         <label for="email">  Enter Email: </label><input type="email" id="email"name ='email' placeholder="Enter Email">
        <br>
        <br>
        <label for="address">Enter Address: </label>
        <textarea rows="4" cols="30" name="address" id="address" placeholder="Enter Address"></textarea>
        <br>
        <br>
        <h3>Select Gender</h3>
        <label for="male">Male</label>
        <input type="radio" value="male" name="gender" id="male"><br>
        <label for="female">Female</label>

        <input type="radio" value="female" name="gender" id="female">
        <br>
        <br>
        <button type="submit" value="submit">Submit</button>
    </form>`)
    return res.end()
    }
    if(req.url ==='/user-data' && req.method ==='POST'){
        let info = []
        req.on('data',chunks=>{
            info.push(chunks)
           
            
        })
        req.on('end',()=>{
            let buff =Buffer.concat(info).toString()
            let param = new URLSearchParams(buff)
            let Obj = Object.fromEntries(param)
            fs.writeFileSync('user.txt',JSON.stringify(Obj))
            
        })
          res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    }
    
})
server.listen(3000, () => {
    console.log("Server is running");
});