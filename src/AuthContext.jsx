import React, { createContext, useState, useEffect, Children } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContext };