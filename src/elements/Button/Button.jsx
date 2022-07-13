import './Button.css';

const Button = ({style, text, onClick}) => {
    return (
        <div    className="button-container"
                style={style}
                onClick={onClick}
                >
                    {text}
        </div>
    )
}

export default Button;