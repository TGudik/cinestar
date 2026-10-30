import { getToken } from "../utils/token";

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
    if (!res.ok) throw new Error(`Tilmelding fejlede: ${res.status}`)
    const data = await res.json();
    return data;
  }

  async function getSubscribers() {
    const token = getToken()
    const res = await fetch(`${apiUrl}/subscriptions`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    if (!res.ok) throw new Error(`Kunne ikke hente tilmeldte: ${res.status}`)
    const preData = await res.json()
    const data = preData.data
    return data
  }

  return {
    sendSubscription,
    getSubscribers
  };
}
