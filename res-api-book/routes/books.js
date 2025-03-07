
import express from 'express';
import {addBook, getBooks} from '../models/books.js';
const router = express.Router();

router.get('/', (req, res) => {
    getBooks((err, books) =>{
        if(err){
            throw err
        }
        res.json(books)
    })
});
router.post('/',( req, res) =>{
    const data=req.body
    addBook(data, (err, book) =>{
        if(err){
            throw err
        }
        res.json(book)
    })
})
export default router;
