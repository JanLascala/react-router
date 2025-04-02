import mtvCartoons from "../Data/Characters"
const navigate = useNavigate();
export default function Card(id) {
    const cartoon = mtvCartoons(id)
    return (
        <div className="card bg-secondary text-light m-3" >
            <div className="card-body text-center">
                <img
                    className="card-img-top mb-3"
                    src={cartoon.image}

                />
                <h5 className="card-title">{cartoon.character}</h5>
                <p className="card-text">{cartoon.show}</p>
                <button className="btn btn-primary mt-2">
                    View Details
                </button>
            </div>
        </div>

    )
}