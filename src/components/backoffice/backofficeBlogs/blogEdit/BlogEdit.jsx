import { useEffect, useState } from "react";
import styles from "./blogEdit.module.css";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetchBlogs } from "../../../../hooks/useFetchBlogs";

const emptyForm = {
    title: "",
    image: null,
    teaser: "",
    description: ""
}

const schema = yup.object({
    title: yup.string().trim().required("Giv opslaget en titel"),
    image: yup.mixed().nullable().test("fileType", "Vælg en gyldig billedfil", (file) => {
        if (!file) return true;
        return file.type?.startsWith("image/") ?? false
    }),
    teaser: yup.string().trim().required("Skriv en teaser for opslaget"),
    description: yup.string().trim().required("Skriv en beskrivelse for opslaget")
})

export default function BlogEdit({currentBlog, setCurrentBlog}) {
    const {addBlog, updateBlog} = useFetchBlogs()

    const [inputKey, setInputKey] = useState(0)
    const [preview, setPreview] = useState(null)
    const editing = Boolean(currentBlog)

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        setError,
        watch,
        formState: {errors, isSubmitting}
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: emptyForm
    })

    const selectedImg = watch("image")

    useEffect(() => {
        if (!currentBlog) {
            reset(emptyForm)
            return
        }

        reset({
            title: currentBlog.title ?? "",
            image: null,
            teaser: currentBlog.teaser ?? "",
            description: currentBlog.description ?? ""
        })

        setInputKey((key) => key + 1 )

    }, [currentBlog, reset]) 

    useEffect(() => {
        if (!(selectedImg)) {
            setPreview(null)
            return
        }

        const imageUrl = URL.createObjectURL(selectedImg) 
        setPreview(imageUrl)

        return () => URL.revokeObjectURL(imageUrl)
    }, [selectedImg])

    function cancelEdit() {
        setCurrentBlog(null)
        reset(emptyForm)
        setInputKey((key) => key + 1)
    }

    async function onSubmit(data) {
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("teaser", data.teaser)
        formData.append("description", data.description)
        if (data.image) formData.append("file", data.image)
        
            try {
                if (editing) {
                    formData.append("id", currentBlog._id)
                    await updateBlog(formData)
                } else {
                    await addBlog(formData)
                }
                cancelEdit()
            } catch (error) {
                setError("root", {message: "Noget gik galt, prøv igen"})
            }
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.heading}>
            {editing ? "Opdater opslag" : "Tilføj opslag"}
          </h3>
          {editing && (
            <button onClick={cancelEdit} className={styles.cancelBtn}>
              Annuller
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              {...register("title")}
              className={styles.input}
              placeholder="Titel"
              type="text"
            />
            {errors.title && (
              <p className={styles.error}>{errors.title.message}</p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <input
              key={inputKey}
              type="file"
              accept="image/*"
              onChange={(e) => {
                setValue("image", e.target.files?.[0] ?? null, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            />

            {preview && <img src={preview} className={styles.preview} />}
            {errors.image && (
              <p className={styles.error}>{errors.image.message}</p>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <input
              {...register("teaser")}
              className={styles.input}
              placeholder="Teaser"
              type="text"
            />
            {errors.teaser && (
              <p className={styles.error}>{errors.teaser.message}</p>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <textarea
              rows={6}
              {...register("description")}
              className={styles.input}
              placeholder="Beskrivelse"
              type="text"
            />
            {errors.description && (
              <p className={styles.error}>{errors.description.message}</p>
            )}
          </div>
          <button disabled={isSubmitting} type="submit" className={styles.submitBtn}>{isSubmitting ? "Sender..." : "Send"}</button>
          {errors.root && <p className={styles.error}>{errors.root.message}</p>}
        </form>
      </div>
    );

}