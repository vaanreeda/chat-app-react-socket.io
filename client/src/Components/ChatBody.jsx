import React from "react"
import { useNavigate } from "react-router-dom"

const ChatBody = ({ messages, lastMessageRef }) => {
   const navigate = useNavigate()

   const handleLeaveChat = () => {
      localStorage.removeItem("userName")
      navigate("/")
      window.location.reload()
   }

   return (
      <div className="w-full h-5/6">
         <header className="border-b border-slate-400 bg-white p-3 overflow-hidden flex items-center justify-between h-14 pl-5">
            <p className="text-2xl text-slate-600">Chat Chat.</p>
            <button
               className="bg-red-400 text-white h-full rounded-md px-5 hover:bg-red-600 duration-300"
               onClick={handleLeaveChat}>
               LEAVE CHAT
            </button>
         </header>

         <div className="p-3 pb-5 overflow-scroll h-full">
            {messages.map((message) =>
               message.name === localStorage.getItem("userName") ? (
                  <div key={message.id} className="flex flex-col gap-1 items-end">
                     <p className="text-sm text-slate-500">You</p>
                     <div className="bg-green-400 py-2 px-4 rounded-lg">
                        <p>{message.text}</p>
                     </div>
                  </div>
               ) : (
                  <div key={message.id} className="flex flex-col gap-1 items-start">
                     <p className="text-sm text-slate-500">{message.name}</p>
                     <div>
                        <p className="bg-slate-100 py-2 px-4 rounded-lg">{message.text}</p>
                     </div>
                  </div>
               ),
            )}
            <div ref={lastMessageRef} />
         </div>
      </div>
   )
}

export default ChatBody
