
const Button = ({text = "Click",click}) => {
    return(
        <button onClick={click}>{text}</button>
    )
}

export default Button;