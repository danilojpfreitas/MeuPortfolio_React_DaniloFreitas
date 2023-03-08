import styles from './Contato.module.scss'
import Contatos from 'data/contato.json'
import { ReactComponent as Celular } from 'assets/contato/phone-solid.svg'
import { ReactComponent as Email } from 'assets/contato/envelope-solid.svg'
import { ReactComponent as LinkedIn } from 'assets/contato/linkedin-in.svg'

type Props = typeof Contatos[0];

export default function Contato(props: Props) {
    const { name,dados } = props;
    return (
        <a href={dados.link} target="_blank" className={styles.contato}>
            <div className={styles.contato__icon}>
                {name === "Celular" ? <Celular className={styles.contato__svg}/> : ""}
                {name === "Email" ? <Email className={styles.contato__svg}/> : ""}
                {name === "LinkedIn" ? <LinkedIn className={styles.contato__svg}/> : ""}
            </div>
            <div className={styles.contato__dados}>
                <h3>{name}</h3>
                <span>{dados.data}</span>
            </div>
        </a>
    )
}