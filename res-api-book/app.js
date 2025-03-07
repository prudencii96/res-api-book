import express from 'express'
import bodyParser from 'body-parser'
import { mongoose } from 'mongoose'
import bookRoutes from './routes/books.js'
const app = express()
const PORT = 5000

mongoose.connect('mongodb://localhost:27017/REST-APIBook',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection

app.use(bodyParser.json())
app.use('/books', bookRoutes)
app.get('/', (req, res) =>{
    res.send('Hi Rest Apilovers')
})

app.listen(PORT, () => {
    console.log(`Rest api running at http://localhost:${PORT}`);
});