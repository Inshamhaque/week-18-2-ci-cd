import express from 'express'
const rootRouter = express.Router();
import userRouter from './user';
rootRouter.use('/user',userRouter);
rootRouter.get('/health',(req,res)=>{
    res.status(200).json({
        msg : "Router server is healthy"
    })
})
export default rootRouter;
export const dummy = 0;
