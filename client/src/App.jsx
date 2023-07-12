import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import ChatPage from "./Components/ChatPage"
import io from "socket.io-client"

const socket = io.connect("http://localhost:3000")

const App = () => {
   return (
      <BrowserRouter>
         <div>
            <Routes>
               <Route path="/" element={<Home socket={socket} />} />
               <Route path="/chat" element={<ChatPage socket={socket} />} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
