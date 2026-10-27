const apiUrl = "http://localhost:3042"

const reviewsLoader = async () => {
    const res = await fetch(`${apiUrl}/reviews`)
    if (!res.ok) throw new Response("Fejl i at hente retter", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const homeLoader = async () => {
    const [reviews] = await Promise.all([
        reviewsLoader()
    ])

    return {
        reviews
    }
}