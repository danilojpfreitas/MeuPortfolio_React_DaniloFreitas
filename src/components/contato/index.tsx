import styles from './Contato.module.scss'
import contatos from '../../data/contato.json'
import { useState } from 'react'
import { ReactComponent as Celular } from '../../assets/contato/phone-solid.svg'
import { ReactComponent as Email } from '../../assets/contato/envelope-solid.svg'
import { ReactComponent as LinkedIn } from '../../assets/contato/linkedin-in.svg'


export default function Contato() {
    const [ contato, setContato ] = useState(contatos)

    return (
        <section className={styles.contato}>
            <div>

                <h2>CONTATO</h2>

            </div>

            <div className={styles.contato__contatos}>

                {contato.map(contato => (
                    <a href={contato.dados.link} target="_blank" className={styles.contato__contato}>
                            <div className={styles.contato__contato__icon}>
                                {contato.name == "Celular" ? <Celular className={styles.contato__contato__svg}/> : ""}
                                {contato.name == "Email" ? <Email className={styles.contato__contato__svg}/> : ""}
                                {contato.name == "LinkedIn" ? <LinkedIn className={styles.contato__contato__svg}/> : ""}
                            </div>
                            <div className={styles.contato__contato__dados}>
                                <h3>{contato.name}</h3>
                                <span>{contato.dados.data}</span>
                            </div>
                    </a>
                ))}

            </div>

        </section>
    )
}