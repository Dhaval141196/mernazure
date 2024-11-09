import express from "express";
import { Book } from "../models/bookmodel.js";
const router = express.Router();
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:"Send All required fields: title, author, publishYear"})
        }

        const newbook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newbook);
        return res.status(201).send(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

router.get('/',async(req,res)=>{
 try{
  const book= await Book.find({});
  res.status(200).json(
   {count: book.length,data:book}
);
 }catch(err){
  res.status(500).send({message:error.message});

 }
});
export  default  router;