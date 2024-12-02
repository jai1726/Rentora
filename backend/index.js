const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db.js');
const cors = require('cors');
const router = require('./routes/User.Routes.js');
const postRouter = require('./routes/Post.Routes.js');
const http = require('http');
const { Server } = require('socket.io');
const setupMessagingSockets = require('./sockets/messaging.js');

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
const server=http.createServer(app);
const io=new Server(server, {
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST'],
    },
});
app.use(express.json());
app.use(cors());

connectDB();


app.use("/api/user", router);
app.use("/api/post", postRouter);


setupMessagingSockets(io);

// app.use('/', (req, res) => {
//     console.log("GET request received");
//     res.status(200).json({ message: "GET request working" });
// });

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`);
});