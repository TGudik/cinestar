export function useSubscriptions() {
  const apiUrl = `http://localhost:3042`;

  async function sendSubscription(body) {
    try {
      const res = await fetch(`${apiUrl}/subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Fejl i afsending", {cause: error});
    }
  }

  return {
    sendSubscription,
  };
}
