import './Header.css';
import logo from '..//../images/logo.png'

export default function Header() {
    return (
        <header className="header">

            <div className="header-logo"><img src={logo} alt="" className="logo" /></div>

            <div className="header-name">
                <h1>TODO LIST</h1>
                <span>Create your list</span>
            </div>
        </header>
    )
}