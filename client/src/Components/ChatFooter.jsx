import React, { useState } from "react"

const ChatFooter = ({ socket }) => {
   const [message, setMessage] = useState("")

   const handleSendMessage = (e) => {
      e.preventDefault()

      if (message.trim() && localStorage.getItem("userName")) {
         socket.emit("message", {
            text: message,
            name: localStorage.getItem("userName"),
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
         })
      }
      setMessage("")
   }

   return (
      <div className="w-ful h-20">
         <form className="flex items-center h-full p-1" onSubmit={handleSendMessage}>
            <input
               className="w-full h-full p-5 rounded-s-md outline-green-500"
               type="text"
               placeholder="Message..."
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button className="h-full w-32 bg-green-600 text-white hover:bg-green-500 duration-200">SEND</button>
         </form>
      </div>
   )
}

export default ChatFooter
