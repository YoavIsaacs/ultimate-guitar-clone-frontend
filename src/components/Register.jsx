import React, { useState, useContext } from "react";
import axios from 'axios'
import { AuthContext } from '../AuthContext'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', {
                username,
                password,
            });
            login(response.data.token);
        } catch (error) {
            console.error("Error registering: ", error)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="username">
                            Username
                        </label>
                        <input 
                            type="text"
                            id="username"
                            value={username}
                            onChange={(prev) => setUsername(prev.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                         <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            type="text"
                            id="password"
                            value={password}
                            onChange={(prev) => setPassword(prev.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Register;