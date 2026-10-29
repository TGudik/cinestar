import { getToken, removeToken, setToken } from "./token";

const apiUrl = "http://localhost:3042";

export async function signIn(email, password) {

    const res = await fetch(`${apiUrl}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!res.ok) throw new Response("Login fejlede", { status: res.status });
    const data = await res.json();
    const token = data?.data?.token;
    if (!token) throw new Error("Uventet svar fra backend")
    setToken(token);
    return data;
}

export async function authToken() {
  try {
    const token = getToken();
    if (!token) {
      throw new Response("Intet token", { status: 401 });
    }
    const res = await fetch(`${apiUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    if (res.status === 401) {
      removeToken()
      throw new Error("Session udløbet", 401)
    }
    if (!res.ok)
      throw new Response("Autenticering fejlede", { status: res.status });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
