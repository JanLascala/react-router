import mtvCartoons from "../Data/Characters";

export default function Posts() {
    console.log(mtvCartoons);

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
