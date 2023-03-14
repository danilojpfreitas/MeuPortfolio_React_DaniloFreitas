import styles from './Header.module.scss'
import Itens from './itens';
import MenuHamburguer from './menuHamburguer'

export default function Header(){

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <a href="./index.html"><h2>Danilo Freitas</h2></a>
            </div>

            <ul className={styles.itens}>
                <Itens/>
            </ul>

            <MenuHamburguer />
            
        </header>
    )
}


