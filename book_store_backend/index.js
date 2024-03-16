import express, { request, response } from 'express';
//import {PORT} from "./config.js";
import { PORT, mongoDbURL } from './config.js';
import mongoose from 'mongoose';
import {Book} from "./models/bookModels.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

//Middleware for paersing request body to json
app.use(express.json());

//Middleware for handling cors policy 
//Option 1 : Allow all origins with default of cors(*)
app.use(cors());

//Option 2 : Allow custom origins 
/*app.use(
    cors({
        origin:"http://localhost:2000",
        methods:['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);*/

app.get('/',(request, response) => {
    console.log(request);
    return response.status(234).send("Hello");
});

app.use('/books' , booksRoute);

/*app.post('/books', async(request , response) => {
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
app.get('/books' , async(request , response) =>{
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
app.get('/books/:id' , async(request , response) => {
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
app.put("/books/:id" , async(request , response) => {
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
app.delete("/books/:id",async(request ,response)=>{
   try{
      const {id}=request.params;
      const result=await Book.findByIdAndDelete(id);
      if(!result) throw new Error("Book Not Found!");
      return response.status(200).send({message:"Deleted Successfully!"})
   }catch(err){
       console.log(err);
       response.status(400).send({message: err.message});
   }
});*/

// Establish Database connection 
mongoose.connect(mongoDbURL).then(() =>{
    console.log("This app is connected with Database");

    //Connection with express server
    app.listen(PORT , () => {
        console.log('App is listening port');
    });
}).catch(() =>{
    console.log("error");
});