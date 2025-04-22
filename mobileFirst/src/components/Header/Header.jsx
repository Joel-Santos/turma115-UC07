import styles from "./Header.module.css";
function Header() {
    return (
        <header>
            <h1>Programação</h1>
            <nav>
                <ul>
                    <li><a href="#intro">Introdução</a></li>
                    <li><a href="#recursos">Linguagens Recursos</a></li>
                    <li><a href="#frameworks">Frameworks</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;