import styles from './Contatos.module.scss'
import contatos from 'data/contato.json'
import Contato from './contato';

export default function Contatos() {

    return (
        <section className={styles.contato}>
            <div>

                <h2>CONTATO</h2>

            </div>

            <div className={styles.contato__contatos}>

                {contatos.map((contato) => (
                    <Contato 
                        key={contato.id}
                        {...contato}
                    />
                ))}

            </div>

        </section>
    )
}