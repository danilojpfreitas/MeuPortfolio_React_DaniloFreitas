import { ReactComponent as X } from 'assets/header/x-solid.svg'
import { ReactComponent as Bars } from 'assets/header/bars-solid.svg';
import styles from './MenuHamburguer.module.scss'
import { useState } from 'react';
import Itens from '../itens';

export default function MenuHamburguerAtivo() {

    const [menu, setMenu] = useState(false);

    const ToggleMode = () => {
        setMenu(!menu)
    }
    return (
        <div className={ menu ? styles.menuHamburguer__ativo : ""}>
            {menu ?
                <>
                
                    <button className={styles.menuHamburguer__icon__X} onClick={ToggleMode}>
                        <X/>
                    </button>

                    <ul className={styles.menuHamburguer__itens}>
                        <Itens/>
                    </ul>

                </>
            :
                <button className={styles.menuHamburguer__icon__bars} onClick={ToggleMode}>
                    <Bars/>
                </button>
            }
        </div>
    )
}