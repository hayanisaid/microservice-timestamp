// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const http=require('http');
const path=require('path');



// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/views/index.html')

})

// http://expressjs.com/en/starter/basic-routing.html
 app.get("/:date",(req,res)=>{
    
   let date=new Date();
   let param=req.params.date;
   
   // check if the date is natural
   let regx=/[a-z]/i.test(param);
   const d=(dt)=>{ return (new Date(dt) !== "Invalid Date" && !isNaN(new Date(dt)))};
  
   //checck the param is a date
   if(isDate(param)){
     
     let unix=new Date(param).getTime() / 1000;
     let date=param;
    res.send({
     "unix":unix,
     "date":date
   })
     
   }else if(!isNaN(param)){
     // if the date is a unix
     let date=unixTodate(param);
     let unix=param;
      res.send({
     "unix":unix,
     "date":date
   })
    }else{
      // if the params is null return null
      res.send({
     "unix":"",
     "date":""
   })
    }
   res.end('false')
 })

// check the param is a date
var isDate = function(date) {
    return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) )  ? true : false;
}

// convert unix to date
const unixTodate=(unix)=>{
  let monthArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date(unix*1000);
  let year=date.getFullYear();
  let day=date.getDay();
  let month=monthArray[date.getMonth()];
  return `${month} ${day}, ${year}`
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


function handlequery(query){


}