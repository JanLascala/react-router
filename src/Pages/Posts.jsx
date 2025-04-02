import mtvCartoons from "../Data/Characters";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    console.log(mtvCartoons);
    const navigate = useNavigate();

    const CartoonCard = ({ cartoon }) => {
        return (
            <div className="card bg-secondary text-light m-3" >
                <div className="card-body text-center">
                    <img
                        className="card-img-top mb-3"
                        src={cartoon.image}

                    />
                    <h5 className="card-title">{cartoon.character}</h5>
                    <p className="card-text">{cartoon.show}</p>
                    <button
                        className="btn btn-primary mt-2"
                        onClick={() => navigate(`/post/${cartoon.id}`)}
                    >
                        View Details
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="container d-flex flex-wrap justify-content-center p-3">
            {mtvCartoons.map((cartoon) => (
                <CartoonCard key={cartoon.id} cartoon={cartoon} />
            ))}
        </div>
    );
}
