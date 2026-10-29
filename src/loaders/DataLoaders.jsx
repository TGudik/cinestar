const apiUrl = "http://localhost:3042";

const reviewsLoader = async () => {
    const res = await fetch(`${apiUrl}/reviews`)
    if (!res.ok) throw new Response("Fejl i at hente retter", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

const blogsLoader = async () => {
    const res = await fetch(`${apiUrl}/blogs`)
    if (!res.ok) throw new Response("Fejl i at hente retter", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

const faqsLoader = async () => {
    const res = await fetch(`${apiUrl}/faqs`)
    if (!res.ok) throw new Response("Fejl i at hente retter", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}



export const homeLoader = async () => {
    const [reviews, blogs] = await Promise.all([
        reviewsLoader(),
        blogsLoader()
    ])

    return {
        reviews,
        blogs
    }
}

export const blogLoader = async () => {
    const [blogs] = await Promise.all([
        blogsLoader()
    ])

    return {
        blogs
    }
}

export const faqLoader = async () => {
    const [faqs] = await Promise.all([
        faqsLoader()
    ])

    return {
        faqs
    }
}

export const blogById = async ({ params }) => {
  const res = await fetch(`${apiUrl}/blog/${params.id}`);
  if (!res.ok)
    throw new Response("Fejl i at hente blog fra id", { status: res.status });
  const preData = await res.json();
  const data = preData.data;
  return data;
}; 