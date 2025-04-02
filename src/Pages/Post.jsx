import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import mtvCartoons from "../Data/Characters";

export default function Post() {
    const [post, setPost] = useState()
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        const foundPost = mtvCartoons.find((cartoon) => cartoon.id === parseInt(id));
        setPost(foundPost);
    }, []);


    return (
        

    )
}