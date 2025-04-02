import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
    const { id } = useParams();

    useEffect(() => {

    }, []);
    return (
        <div>
            <h1>character name:{id} </h1>
        </div>

    )
}