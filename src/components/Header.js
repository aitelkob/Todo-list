import PropTypes from 'prop-types'
import  Button from './Button'

const Header = ({title}) => {
    const onClick = () => {console.log('Click')}
    return (
        <header className = 'Header'>
        <h1>{title}</h1>
        <Button color = 'green' text = 'test' onClick = {onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'hello',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,}
export default Header
