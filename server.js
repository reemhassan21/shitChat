const express = require("express");
const path = require("path")
const http = require("http")
var moment = require('moment'); 
const socketio = require("socket.io")
const formatMessage = require('./Utils/messages')
const {userJoin, getCurrentUser, getRoomUsers} = require('./Utils/users')

const app = express();
const PORT  = process.env.PORT|| '3000'  ;
const server = http.createServer(app);
const io =socketio(server);  
app.use(express.static(path.join(__dirname,"public"))); 
io.on("connection", socket => { 
    socket.on('join room', ({username, room}) => { 
        socket.broadcast.to(room).emit('message', formatMessage("ChatBot", `${username} has joined the chat`))
      
        socket.join(room)

        socket.on('chatMessage', msg =>{
            io.to(room).emit('message',formatMessage(username, msg))
        })

        socket.on('disconnect', () =>{
            io.to(room).emit('message', formatMessage("ChatBot",`${username} has left the chat`))
            
        })

       
    })
})

server.listen(PORT , ()=>{console.log("localhost:3000")});