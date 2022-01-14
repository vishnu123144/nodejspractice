const express=require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());

const courses=[
    {
        id:1,
        name:'vishnu'
    },
    {
        id:2,
        name:'ram'
    },
    {
        id:3,
        name:'bharath'
    }
]



app.get('/',(req,res)=>
{
    res.send("vishnu");
});
app.get('/api/courses',(req,res)=>
{
res.send(courses);
});
app.get('/api/courses/:id',(req,res)=>
{
const course=courses.find(c=>c.id===parseInt(req.params.id));
if(!course) res.status(404).send('The course with given id could not found');
res.send(course);
});

app.post('/api/courses',(req,res)=>{

//     const schema={
//         name:Joi.string().min(3).required()
//     };
//     const result=Joi.validate(req.body,schema);

//   if(result.error)
//   {
//       res.status(400).send(result.error);
//       return;
//   }

  if(!req.body.name||req.body.name.length<3)
  {
      res.status(400).send("Name is required should be minimum 3 characters")
      return;
  }

    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res)=>
{
    //look up the course
    //if not existing,rturn 404
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given id could not found');
    //validate
    //if invalid,return 400 -Bad request

    //update course
    //return the updated course

});



app.listen(3000);