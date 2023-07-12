import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = ({ socket }) => {
   const navigate = useNavigate()
   const [userName, setUserName] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem("userName", userName)
      socket.emit("newUser", {
         userName,
         socketID: socket.id,
      })
      navigate("/chat")
   }

   return (
      <form onSubmit={handleSubmit} className="mx-auto mt-20 relative bg-slate-300 flex flex-col w-96 px-5 py-10">
         <h2 className="text-2xl text-center font-medium mb-10 drop-shadow-xl text-slate-900">Sign in to Open Chat</h2>
         <label htmlFor="username" className="">
            Username
         </label>
         <input
            className="w-full p-2 mt-2 rounded-md outline-none"
            type="text"
            minLength={6}
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
         />
         <button className="py-2 w-full bg-green-400 mt-5 rounded-md text-slate-900 hover:bg-green-200 duration-300 border border-green-400">
            Sign in
         </button>
         <div className="absolute w-full h-full bg-slate-700 -z-10 top-5 -right-5"></div>
      </form>
   )
}

export default Home
