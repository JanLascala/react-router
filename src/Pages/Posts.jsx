import mtvCartoons from "../Data/Characters";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    console.log(mtvCartoons);
    const navigate = useNavigate();

    const CartoonCard = ({ cartoon }) => {
        return (
            <div className="row">
                {mtvCartoons.map((cartoon, index) => (
                    <div key={index} id={index}>
                        {cartoon.name}
                    </div>
                ))}
            </div>
        )


    };



}
