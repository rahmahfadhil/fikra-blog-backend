const express =require('express');
const {sequelize} = require('./models')
const userRouter=require('./routes/user.routes')
const app = express();
app.use(express.json());
app.get('/',(req, res, next)=>{
    res.send('Server is runing')
})
app.use("/users",userRouter)
sequelize.sync();

app.listen(3000);
