const http = require("http");
const {getCharById} = require('./controllers/getCharById');
http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
      if(req.url.includes("rickandmorty/character/")){
                    
    const ids= req.url.split('/').at(-1)
    const id = +ids
       getCharById(res,id)
    }

})
.listen(3001)