const templateEngin = require('nunjucks');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const recipes =[
  {id:1, title:"recipe",done:false},
  {id:2, title:"recipe",done:false},
  {id:3, title:"recipe",done:true},
]
  

templateEngin.configure('views', {
    express: app
});
app.route("/")
  .get((req,res)=>res.render('index.html',{tasks}))
.post((req,res)=>{
  res.send(`will add ${req.body.title}`)
})
app.route("/:taskId")
.get((req,res)=>{
  res.render('recipe.html',{recipe:recipes[parseInt(req.params.taskId) -1]})})
.post((req,res)=>{
  res.send(`will make ${tasks[parseInt(req.params.taskId) -1].title} Done`)
})

app.listen(5000, () => {
    console.log('listening on http://127.0.0.1:5000')
});