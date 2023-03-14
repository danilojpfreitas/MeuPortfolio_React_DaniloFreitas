import styles from './Header.module.scss'
import { ReactComponent as Bars } from 'assets/header/bars-solid.svg'
import { useState } from 'react';
import MenuHamburguerAtivo from './menuHamburguer';
import classNames from 'classnames';
import Itens from './itens';

export default function Header(){

    const [menu, setMenu] = useState(false);

    const ToggleMode = () => {
        setMenu(!menu)
    }

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <a href="./index.html"><h2>Danilo Freitas</h2></a>
            </div>

            <ul className={styles.itens}>
                <Itens/>
            </ul>

            <div className={ menu ? styles.menuHamburguer__ativo : styles.header__menuHamburguer__desativo}>
                <a className={styles.header__menuHamburguer__icon}></a>
                
            </div>
        </header>
    )
}


