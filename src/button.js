import PropTypes from "prop-types";
import style from "./button.module.css"
function Button({text}){
    return(
        <div>
        <button className={style.btn}>{text}</button>

        </div>
    )
}
Button.propTypes = {
    text:PropTypes.string.isRequired
}
export default Button;