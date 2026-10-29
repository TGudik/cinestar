import { createContext, useContext, useEffect, useState } from "react";
import { authToken, signIn } from "../utils/signInAuth";
import { removeToken } from "../utils/token";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function restoreSession() {
      try {
        const data = await authToken();
        setUser(data.data);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    }
    restoreSession();
  }, []);

  async function login(email, password) {
    await signIn(email, password);
    const data = await authToken();
    setUser(data.data);
  }

  function logout() {
    setUser(null);
    removeToken();
  }

  const value = { login, logout, user, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth blev brugt uden for provider");
  }
  return context;
}
