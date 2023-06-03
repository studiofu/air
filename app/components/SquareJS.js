
const SquareJS = (props) => {
    return (
        <div className="hidden fixed w-20 h-20 bg-red-500/30">
            <button onClick={props.onClick}>
                {props.value}
            </button>
                        
            <svg className="w-20 h-20">
                <circle cx="50%" cy="50%" r="50%" fill="red" />
            </svg>
        
        </div>
    );
}

export default SquareJS;
