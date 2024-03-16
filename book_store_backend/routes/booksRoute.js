import express from 'express';

const router = express.Router();
import {Book} from  "../models/bookModels.js";

router.post('/', async(request , response) => {
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear)
        {
            return response.status(400).send({
                message : "Send All required fields : title , author , publishYear",
            });
        }
        //Creating Request Body for newBook 
        const newBook = {
            title : request.body.title,
            author : request.body.author,
            publishYear : request.body.publishYear
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
});

//Route To read or get the data from database
router.get('/' , async(request , response) =>{
    try {
        const books = await Book.find({});
        //return response.status(200).send(books);
       return response.status(200).json({
        count: books.length,
        data: books
       });
    } catch (error) {
        console.log(error);
        response.status(500).send({message : error.message});
    }
});

//Route To read or get the data by ID from database
router.get('/:id' , async(request , response) => {
    try {
        const {id} =  request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error);
        response.status(500).send({message : error.message});
    }
});

//Route to update books data  in the database
router.put("/:id" , async(request , response) => {
    try {
        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id , request.body);
        if(!result) throw new Error("Book not found");
        return response.status(200).send({message : "The book has been updated successfully."});
    } catch (error) {
        console.log(error);
        response.status(500).send({message : error.message});
    }
});

//Route to delete  a book from the database
router.delete("/:id",async(request ,response)=>{
   try{
      const {id}=request.params;
      const result=await Book.findByIdAndDelete(id);
      if(!result) throw new Error("Book Not Found!");
      return response.status(200).send({message:"Deleted Successfully!"})
   }catch(err){
       console.log(err);
       response.status(400).send({message: err.message});
   }
});

export default router;