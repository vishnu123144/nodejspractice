
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/playground')
   .then(()=>console.log("connected to mongodb"))
   .catch(err=>console.log('could not connected to mongoDb..',err));

const courseSchema=new mongoose.Schema(
    {
        name: { type:String,
        required:true,
        minlength:5,
         maxlength:255 },
        
         category:{
            type:String,
            required:true,
            enum:['web','mobile','network'],
            lowercase:true
        },
        author: String,
        tags:{
            type: Array,
          
            // validate: {
              
            //     validator: function(v)
            //     {
                  
            //         return v && v.length>0;
            //     },
            //     message:'A course should have atleast one tag.'
            // }
        },
        date: {type:Date,default:Date.now},
        isPublished: Boolean,
        price:{
            type:Number,
            required:function()
            {
                return this.isPublished;
            }
        }
    });

const Course=mongoose.model('Course',courseSchema);
async function createCourse() {
    const course=new Course(
        {
             name:'Angular.js Course',
             category:'TECHNOLOGY',
            author: 'Mosh',
            tags: null,
            isPublished: true,
            price:15
        }
    );
    try{
    const result= await course.save();
    console.log(result);}
    catch( ex)
    {
        for(field in ex.errors)
          console.log(ex.errors[field]);
    }
}

async function getCourses()
{
   const courses=await Course
                            //  .find({author:'Mosh',isPublished: true})
                             .find({author:/^Mosh/}) //regular expression starts with Mosh
                             .find({author:/.*Mosh.*/})//regular expression for checking contains Mosh
                             .limit(10)
                             .sort({name: 1}) // 1 indicates ascending order
                            //  .select({name:1,tags:1})//select the property that we want to return
                             .count();
   console.log(courses);
}
createCourse();



//Schema types:
//String,Number,Date,Buffer,Boolean,
//objectID,Array