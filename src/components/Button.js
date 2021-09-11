import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
//    const onClick =(e)=>{
//        console.log(e)
//    }

    return (
        <div>
            <button 
            onClick={onClick}
            className='btn' 
            style={{backgroundColor:color}}>{text}</button>
        </div>
    )
}
//default props
// Button.defaultProps = {
//     color: 'black'
// }

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func

}

export default Button
