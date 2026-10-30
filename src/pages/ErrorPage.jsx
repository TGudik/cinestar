import { useRouteError } from "react-router-dom";
import NotFoundSection from "../components/notFoundSection/NotFoundSection";

export default function ErrorPage() {

    const error = useRouteError()

    return (
        <NotFoundSection
            title={"Noget gik galt"}
            body={error?.message || "Der opstod en ukendt fejl"}
        />
    )
}