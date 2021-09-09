import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add Tasks'/>
            {/* <button className='btn'>Add Task</button> */}
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
