export function Button({handleClick, text}) {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
}
