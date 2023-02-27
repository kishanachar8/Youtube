const express = require('express');
const app = express();
 
 app.set('view engine','ejs');

 app.use(express.static('public'))

let categories = [
    {
        title:"All"
    },
    {
        title:"Music"
    },
    {
        title:"Comedy"
    },
    {
        title:"Sports"
    },
    {
        title:"News"
    },
    {
        title:"Bollywood"
    },
    {
        title:"Cricket"
    },
    {
        title:"Football"
    },
    {
        title:"Entertainment"
    },
    {
        title:"Reality Shows"
    },
    {
        title:"Live"
    },
    {
        title:"Gaming"
    },
    {
        title:"Learning"
    },
    {
        title:"Movies"
    },
];
let videos=[
    {image:'/images/vid1.mp4',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    {image:'/images/hq720.webp',title:'Title of the video',channel:'channel'},
    
    // {image:'/images/img1.webp',title:'',channel:''},
    // {image:'/images/img2.webp',title:'',channel:''},
    // {image:'/images/img3.webp',title:'',channel:''},
    // {image:'/images/img4.webp',title:'',channel:''},
    // {image:'/images/img5.webp',title:'',channel:''},
    // {image:'/images/img6.webp',title:'',channel:''},
    // {image:'/images/img7.webp',title:'',channel:''},
    // {image:'/images/img8.webp',title:'',channel:''}     
];



 app.get('/',(req,res)=>{
    res.render('home',{categories,videos})
 })

 app.listen(3000,()=>{
    console.log('listening on 3000');
 })

