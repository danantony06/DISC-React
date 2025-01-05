import "./Button.js";

function Button({text}){
    return(
        <button className="SubmitButton">
        {text}
        </button>
    );
}

export default Button