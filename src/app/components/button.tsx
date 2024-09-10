interface Iprops{
    text:string
}

function Button({text}:Iprops) {  /// destructuring
    
    return <button>{text}</button>
}
export default Button