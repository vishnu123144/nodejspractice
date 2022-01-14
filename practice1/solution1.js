const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')

const courseSchema=new mongoose.Schema(
    {
        name: String,
        author: String,
        tags: [String],
        date: Date,
        isPublished: Boolean,
        price: Number
    }
);
const Course=mongoose.model('Course',courseSchema);

async function createCourse() {
    const course=new Course(
        {
            name:'Angular.js Course',
            author: 'Mosh',
            tags: ['angular','frontend'],
            isPublished: true,
            price:1000
        }
    );
    
    const result= await course.save();
    console.log(result);
}
