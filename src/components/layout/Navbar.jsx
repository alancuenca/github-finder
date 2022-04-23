import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
    return (
        <div className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            Navbar
        </div>
    )
}
    Navbar.defaultProps = {
        title: 'Github Finder',
    }
    Navbar.propTypes = {
        title: PropTypes.string,
    }


export default Navbar