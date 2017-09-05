// 后台只提供接口，前端只调用接口
let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./mock/slider');
let path=require('path');
function read(callback) {
  fs.readFile(path.resolve(__dirname+'/mock/book.json'),'utf-8',function (err,data) {
    data=data.length===0?[]:JSON.parse(data);
    callback(data);
  })
}
function write(data,callback) {
  fs.writeFile(path.resolve(__dirname+'/mock/book.json'),JSON.stringify(data),callback)
}
http.createServer(function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
    res.setHeader("Access-Control-Allow-Origin","*");
  let reg=/\.(html|css|js|img)/;
    if(req.method==='OPTIONS'){
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, accept, origin, content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.setHeader("X-Powered-By", ' 3.2.1');
        res.setHeader("Content-Type", "application/json;charset=utf-8");
      res.end();
  }
  if(pathname==='/'){
      res.writeHead(301, {'Location': '/home'});
      res.end();
      return
  }
  if(pathname === '/api/slider'){
    return res.end(JSON.stringify(sliders));
  }
  let id=query.id;
  if(pathname==="/api/hot"){
    read(function (data) {
      var books=data.reverse().slice(0,6);
      res.end(JSON.stringify(books));
    });
    return
  }
  //图书的增删改查
  if(pathname==='/api/book'){
    switch (req.method){
      case 'GET':
        if(id){
          read(function (data) {
            let book=data.find(item=>item.id==id);
            res.end(JSON.stringify(book))
          })
        }else{
          read(function (data) {//data代表所有数据
            res.end(JSON.stringify(data))
          });
        }
        break;
      case 'POST':
        let addStr="";
        req.on("data",function (chunk) {
          addStr+=chunk;
        });
        req.on("end",function () {
          let book=JSON.parse(addStr);
            read(function (data) {//读取所有的书,获取最后一项的id累加
            book.id=data.length>0?data[data.length-1].id+1:1;
            data.push(book);//将新书放回去
            write(data,function () {
              res.end(JSON.stringify(book))
            })
          });
        });
        break;
      case 'DELETE':
        read(function (data) {//读取所有的书,获取最后一项的id累加
          data.forEach((item,index)=>{
            if(item.id==id){
              data.splice(index,1);
            }
          });
          write(data,function () {
            res.end(JSON.stringify({}))
          })
        });
        break;
      case 'PUT':
        let putStr="";
        req.on("data",function (chunk) {
          putStr+=chunk;
        });
        req.on("end",function () {
          let book=JSON.parse(putStr);
          book.id=Number(id);
          read(function (data) {
            data.forEach((item,index)=>{
              if(item.id==id){
                data[index]=book
              }
            });
            write(data,function () {
              res.end(JSON.stringify(book))
            })
          });
        });
        break;
    }
    return
  }
  if(reg.test(pathname)){
    fs.readFile(path.resolve(__dirname+'/build'+pathname),'utf-8',function (err, data) {
      res.end(data);
    });
  }else{
    fs.readFile(path.resolve(__dirname+'/build/index.html'),'utf-8',function (err, data) {
      res.end(data);
    });
  }
}).listen(4001);
