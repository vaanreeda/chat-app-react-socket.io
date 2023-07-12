const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
   cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
   },
})

let users = []

io.on("connection", (socket) => {
   console.log(`${socket.id} user just connected`)

   // รับ ข้อความจากฝั่ง หน้าบ้าน แล้วส่งกลับไป
   socket.on("message", (data) => {
      io.emit("messageResponse", data)
   })

   socket.on("typing", (data) => {
      socket.broadcast.emit("typingResponse", data)
   })

   socket.on("newUser", (data) => {
      users.push(data)
      io.emit("newUserResponse", users)
   })

   socket.on("disconnect", () => {
      console.log(`user disconnected`)
      users = users.filter((user) => user.socketID !== socket.id)
      io.emit("newUserResponse", users)
      socket.disconnect()
   })
})

server.listen(3000, () => {
   console.log("server is running on port 3000")
})
