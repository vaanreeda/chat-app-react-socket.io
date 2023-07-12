import React, { useEffect, useState } from "react"

const ChatBar = ({ socket }) => {
   const [users, setUsers] = useState([])

   useEffect(() => {
      socket.on("newUserResponse", (data) => {
         setUsers(data)
      })
   }, [socket, users])

   return (
      <div className="w-48 p-5 bg-slate-500 text-white">
         <h2 className="text-center mb-5 text-xl">Open Chat</h2>

         <div className="border-t-2 text-center pt-3 font-medium">
            <h4 className="mb-3">ACTIVE USERS</h4>
            <div className="text-green-500">
               {users.map((user) => (
                  <p key={user.socketID}>{user.userName}</p>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ChatBar
