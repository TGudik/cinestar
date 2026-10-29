export function useFetchMessages() {
  const apiUrl = `http://localhost:3042`;

  async function sendMessage(body) {

      const res = await fetch(`${apiUrl}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`Fejl i at sende besked: ${res.status}`);
      const data = await res.json();
      return data
  }

  return {
    sendMessage,
  };
}
