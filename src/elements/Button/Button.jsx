import './Button.css';

const Button = ({style, text, onClick, hover}) => {
    return (
        <div    className={"button-container " + hover}
                style={style}
                onClick={onClick}
                >
                    {text}
        </div>
    )
}

export default Button;