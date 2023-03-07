import styles from './Footer.module.scss'
import { ReactComponent as Python } from '../../assets/footer/python.svg'
import { ReactComponent as React } from '../../assets/footer/react.svg'
import { ReactComponent as JS } from '../../assets/footer/js.svg'
import { ReactComponent as Node } from '../../assets/footer/node.svg'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <a href="./index.html"><h2>Danilo Freitas</h2></a>
        
        <div>
            <h4>Linguagens de programação</h4>
            <div className={styles.footer__svg}>
                <Python className={styles.footer__brands}/>
                <React className={styles.footer__brands} />
                <JS className={styles.footer__brands} />
                <Node className={styles.footer__brands} />
            </div>
        </div>

        <span>Copyright &copy; 2023 Freitas's - Versão 2.0</span>
    </footer>
    )
}