import PropTypes from "prop-types"

function Button( props ) {
    return <button>{props.text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Button;