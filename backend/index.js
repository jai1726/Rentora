const express=require('express');
const dotenv=require('dotenv');
const connectDB =require('./db.js');
const cors=require('cors');
const router=require('./routes/User.Routes.js');

dotenv.config();

const PORT=process.env.PORT||4000;

const app=express();
app.use(express.json());
app.use(cors());

connectDB();


app.use("/api/user",router);


app.use('/', (req, res) => {
    console.log("GET request received");
    res.status(200).json({ message: "GET request working" });
});

app.listen(PORT, ()=>{
    console.log(`app listening on http://localhost:${PORT}`);
});