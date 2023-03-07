import styles from './Header.module.scss'

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <a href="./index.html"><h2>Danilo Freitas</h2></a>
            </div>
            <ul id="nav">
                <li>
                    <a target="_blank" href="https://github.com/danilojpfreitas">github</a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/danilo-freitas-dev/">linkedin</a>
                </li>
                <li>
                    <a target="_blank" href="mail:danilojpfreitas@gmail.com">email</a>
                </li>
                <li>
                    <a href="#contato">contato</a>
                </li>
            </ul>
                {/* <button className={styles.header__button02} aria-expanded="false"><FontAwesomeIcon icon={faBars} />  Menu</button> */}
        </header>
    )
}


