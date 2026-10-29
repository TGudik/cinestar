import Swal from "sweetalert2"
import { getToken } from "../utils/token"
import { useRevalidator } from "react-router-dom"

export function useFetchBlogs() {
    const apiUrl = `http://localhost:3042/blog`
    const {revalidate} = useRevalidator()

    async function deleteBlog(id) {
        const result = await Swal.fire({
            icon: "warning",
            title: "Slet blogopslag?",
            showCancelButton: true,
            confirmButtonText: "Slet"
        })
        if (!result.isConfirmed) return
        const token = getToken();
        const res = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        if (!res.ok) {
            throw new Error(`Fejl i at slette opslag ${res.status}`)
        }
        const data = res.json()
        revalidate()
    }

    async function addBlog(body) {
        const token = getToken();
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`
            },
            body: body
        })
        if (!res.ok) throw new Error(`Fejl i at oprette opslag ${res.status}`)
        const data = await res.json()
        revalidate()
    }

    async function updateBlog(body) {
        const result = await Swal.fire({
            icon: "question",
            title: "Sikker på du vil opdatere opslag?",
            showCancelButton: true,
            cancelButtonText: "Annuller"
        })
        if (!result.isConfirmed) return 
        const token = getToken();
        const res = await fetch(apiUrl, {
            method: "PUT", 
            headers: {
                authorization: `Bearer ${token}`
            }, 
            body: body
        })
        if (!res.ok) throw new Error(`Fejl i at opdatere opslag ${res.status}`)
        const data = res.json()
        revalidate()
    }

    return {
        deleteBlog,
        addBlog,
        updateBlog
    }

}