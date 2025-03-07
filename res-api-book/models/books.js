import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
let booksSchema=mongoose.Schema({
    _id: {
        type: ObjectId,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    year: {
        type: String,
    }
});

const Books = mongoose.model('Books', booksSchema);

// Összes könyv lekérése
const getBooks = (callback, limit) => Books.find(callback).limit(limit);

const addBook=(data, callback) =>{
    const book =new Books({
        _id:new Date().getTime(),
        author: data.author,
        title: data.title,
        type: data.type,
        year: data.year
    })
    book.save(callback)
}
export  {addBook, getBooks };
