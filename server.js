import express from 'express';
import colors from "colors";
import dotenv from "dotenv";
import morgan from 'morgan'
import connctDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js"
import cors from 'cors';


//configure env
dotenv.config();

//database config
connctDB();


//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json()); 
app.use(morgan('dev')); //log request to console

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);

//rest api
app.get('/', (req, res) => {
    res.send(
        "<h1>Welcome to Ecommerce App</h1>"
    );
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, ()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
    });
