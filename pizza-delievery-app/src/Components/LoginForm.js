import React, { useState } from "react";
import axios from 'axios';

const   LoginForm=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const response =await
            axios.post('http://localhost:3000/login',{username,password,});
            setMessage(response.data.message);
        }catch(error){
            setMessage(error.response?error.response.data.message:'An error ocuured');
        }
        
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-blue-100 p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className=" block text-sm font-medium text-gray-700">Username</label>
                    <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
                     />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-400 focus:outline-none"
                     />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">Login</button>
                </form>
                {message && <p className="mt-4 text-center text-red-600">{message}</p>}
                </div>
        </div>
    );
}
 
export default LoginForm;