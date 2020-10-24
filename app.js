//Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and video
const express = require('express');
const cors = require('cors');// to access restricted resources of domain like video, script
const ytdl = require('ytdl-core');// youtube down
const app = express();
const hbs=require('hbs');
const path=require('path');
app.use(cors());
const port=process.env.PORT||3000 // enviroment var object
app.set('view engine','hbs')

//console.log(__dirname)//path

const p=path.join(__dirname,'/public')


//console.log(p);
 app.use(express.static(p)) //// find all html css js file first what route request we get
// // auto connect all  html,css ,jss ,img  inside public folder
// //app.use() loads a function to be used as middleware

// app.get('', (req,res) => {

//     res.sendfile(p)

// })


app.get('/',(req,res)=>{ //home
    res.render('index',{// rendex index hbs view template
        // use name in index hml file pass object to html and create dynamic web page
    })
})

app.get('/download',async (req,res) => {
 try{
   var URL = req.query.URL;//The query string is the part that comes after the URL path, and starts with a question mark ?.
   if(ytdl.validateURL(URL) && URL!== undefined){
  //ontent-Disposition is a response header, ie. the server must return it.   In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is
  res.header('Content-Disposition', 'attachment;\ filename="video.mp4"');
 // On this Page. In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page, or as an attachment, that is downloaded and saved locally.

  ytdl(URL, {
    format: 'mp4'
    }).pipe(res);


  }
 else{
    res.render('index',{result: 'Video Not Found Some Error Occured!'
    })
   }
 }
 catch(error){
   res.render('index',{result: 'Video Not Found Some Error Occured!'
   })
 }
});
//. then use ytdl to download the video with format mp4 then pipe it (send it) to the user to download.

app.get('*', (req,res) => {

    res.send("<h1>Error 404 Page Not Found</h1>")

})


app.listen(port, () => {
    console.log('Server started');
});
