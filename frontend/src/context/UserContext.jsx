// context/UserContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(); // ✅ this creates the context

export const useTheme = () => useContext(UserContext); // ✅ this hook will pull the context value

export const UserProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  
  
  console.log(theme)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <UserContext.Provider value={{ theme, setTheme }}>
      {children}
    </UserContext.Provider>
  );
};
