export function useSubscriptions() {
  const apiUrl = `http://localhost:3042`;

  async function sendSubscription(body) {

    const res = await fetch(`${apiUrl}/subscription`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Tilmelding fejlede", {status: res.status})
    const data = await res.json();
    return data;

  }

  return {
    sendSubscription,
  };
}
