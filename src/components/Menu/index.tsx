import './style.css'
import { Link } from 'react-router-dom'
// Usamos o Link para não perder o estado da pagina, pois se eu usar o <a> ele da um full reload e eu acabo perdendo dados. no caso eu quero apenas mudar de um componente pro outro

export const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/" state={'this is state from HOME'}>Home</Link></li>
                <li><Link to="/abaut">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/posts/10">Post 10</Link></li>
                <li><Link to="/redirect">Redirect</Link></li>
            </ul>
        </nav>
    )
}