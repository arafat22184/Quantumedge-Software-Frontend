import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { toast } from "react-toastify";
import { API_URL } from "../lib/config.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allProjects, setAllProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);

  useEffect(() => {
    setProjectLoading(true);
    fetch(`${API_URL}/api/jobs`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data);
        setProjectLoading(false);
      });
  }, []);

  const fetchMe = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth/me`, {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const register = async ({ name, email, password }) => {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");
    setUser(data.user);
    toast.success("Account created successfully 🎉");
    return data.user;
  };

  const login = async ({ email, password }) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
    setUser(data.user);
    toast.success("Login successful 🎉");
    return data.user;
  };

  const logout = async () => {
    await fetch(`${API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    toast.info("Logged out");
  };

  const authInfo = {
    user,
    loading,
    register,
    login,
    logout,
    allProjects,
    setAllProjects,
    projectLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
