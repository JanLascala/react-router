import mtvCartoons from "../Data/Characters"

export default function Cards({ id, image, character, show }) {
    return (
        <div className="card bg-secondary text-light m-3">
            <div className="card-body text-center">
                <img
                    className="card-img-top mb-3"
                    src={image}
                    alt={character}
                />
                <h5 className="card-title">{character}</h5>
                <p className="card-text">{show}</p>
                <button className="btn btn-primary mt-2">
                    View Details
                </button>
            </div>
        </div>
    );
}