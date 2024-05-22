import star from '../assets/star.png';
import starFill from '../assets/starFill.jpg';
export default function Star(props) {
    let starIcon = (props.isFilled ? `${starFill}` : `${star}`);
    return (
        <div>
            <img
                src={starIcon}
                className="card--favorite"
                onClick={props.handleClick}
            />
        </div>
    )
}