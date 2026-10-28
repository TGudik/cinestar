export function useFetchMessages() {
  const apiUrl = `http://localhost:3042`;

  async function sendMessage(body) {
    try {
      const res = await fetch(`${apiUrl}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Response("Fejl i at sende besked", { status: res.status });
      return data
    } catch (error) {
      throw new Error("Fejl i afsending", error)
    }
  }

  return {
    sendMessage,
  };
}
