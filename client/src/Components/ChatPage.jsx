import React, { useEffect, useRef, useState } from "react"
import ChatBar from "./ChatBar"
import ChatBody from "./ChatBody"
import ChatFooter from "./ChatFooter"

const ChatPage = ({ socket }) => {
   const [messages, setMessages] = useState([])
   const lastMessageRef = useRef(null)

   useEffect(() => {
      socket.on("messageResponse", (data) => setMessages([...messages, data]))
   }, [socket, messages])

   useEffect(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
   }, [messages])

   return (
      <div className=" mx-auto bg-slate-300  flex h-screen">
         <ChatBar socket={socket} />
         <div className="bg-blue-200 w-full flex flex-col justify-between">
            <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
            <ChatFooter socket={socket} />
         </div>
      </div>
   )
}

export default ChatPage
