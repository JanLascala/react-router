import mtvCartoons from "../Data/Characters";
export default function Posts() {


    console.log(mtvCartoons);
    const CartoonCard = ({ cartoon }) => {
        return (

            <div className="card bg-secondary m-3 justify-content-center">
                <div><img className="photo just" src={cartoon.image} alt={cartoon.character} /></div>
                <div><h3>{cartoon.character}</h3>
                    <p>{cartoon.show}</p></div>

            </div>
        );
    };

    return (
        <div className="container d-flex p-3 ">

            {mtvCartoons.map((cartoon) => (
                <CartoonCard key={cartoon.id} cartoon={cartoon} />
            ))}

        </div>

    )
}
