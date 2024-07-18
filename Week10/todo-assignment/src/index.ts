import express from 'express'
const app = express();
import cors from 'cors';
import rootRouter from './routes/index';
import authMiddleware from './auth';
app.use(express.json());
app.use(cors());
app.use('/app',rootRouter);
app.get('/health',(req,res)=>{
    res.status(200).json({
        msg : "Server is healthy"
    })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})