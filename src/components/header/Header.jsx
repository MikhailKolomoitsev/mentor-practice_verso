// import styles from './header.module.css'
// import PropTypes from 'prop-types'
import logo from '../../images/Logo.svg'

const Header=({linksArr}) => {
    return (
        <header>
            <a href="/"><img src={logo} alt="SiteLogo" /></a>
        <ul>
            {linksArr.map(({link, url}) => (
                <li><a href={url}>{link}</a></li>
            ))}
            </ul>
            <button type="button">Buy $VSO</button>
        </header>
        
    )
}

export default Header