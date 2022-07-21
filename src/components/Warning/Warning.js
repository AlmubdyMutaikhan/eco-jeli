import './Warning.css';

const Warning = (props) => {
    return(
        <div className={`warning-container ${props.status}` }
                style={props.style}
        >
            {props.children}
        </div>
    )
}

export default Warning;