const TOKEN_KEY = "authToken";

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    return null;
  }
}

export function setToken(token) {

  if (typeof token !== "string" || !token) {
    throw new Error("Ugyldig token");
  }

  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    throw new Error("Kunne ikke gemme token", {cause: error});
  }
}

export function removeToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    
  }
}
