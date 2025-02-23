import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/Db.js';
import productRoutes from './routes/product.route.js'
dotenv.config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 4001;

app.use('/api/products',productRoutes)
app.listen(PORT , ()=>{
    connectDB();
    console.log(`Server is started at http://localhost:${PORT}`)
})