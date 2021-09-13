import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick=(e)=>{
    //     console.log(e)
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd?'red':'green'} 
            text={showAdd ? 'Close':'Add Task'}
            onClick={onAdd}

            />
            
        </header>
    )
}
//default props
Header.defaultProps = {
    title: 'Task Traker'
}

//propTypes
Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header
