import './Warning.css';

const Warning = (props) => {
    return(
        <div className={`warning-container ${props.status}` }>
            {props.children}
        </div>
    )
}

export default Warning;