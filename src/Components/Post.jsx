import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mtvCartoons from "../Data/Characters";

export default function Post() {
    const { id } = useParams();

    const cartoon = mtvCartoons.find(cartoon => cartoon.id === parseInt(id));

    useEffect(() => {

    }, []);

    const navigate = useNavigate();
    return (
        <>
            <div className="d-flex justify-content-spacebetween">
                <button className="m-4"
                    onClick={() => navigate(-1)}>
                    Back
                </button>
                <button className="m-4"
                    onClick={() => navigate(cartoon.id + 1)}>
                    forward
                </button></div>

            <div className="d-flex justify-content-center g-3 mt-4">
                <img className="portrait p-3" src={cartoon.image} alt={cartoon.character} />
                <div>
                    <h1>Character Name: {cartoon.character}</h1>
                    <p>Show: {cartoon.show}</p>
                    <h2>description</h2>
                    <p>tba...</p>
                </div>
            </div>

        </>
    );
}
