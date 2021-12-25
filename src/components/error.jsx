import './assets/styles/error.scss';

function Error(props) {

    return (
        <div className="error-container">
            <h1>{props.header}</h1>
            <p>{props.p}</p>
            <img src={props.img} alt={"cat"}></img>
        </div>
    );
}

export default Error;