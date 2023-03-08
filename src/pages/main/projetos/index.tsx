import styles from './Projetos.module.scss'
import projetos from 'data/projetos.json'
import Projeto from '../../../components/projeto'

export default function Projetos() {

    return (
        <article className={styles.projetos}>

            <div>
                <a href="./index.html">
                    <h2 className={styles.projetos__titulo}>
                        Alguns projetos
                    </h2>
                </a>
            </div>

            <section>
                {projetos.slice(-3).map((projeto) => (
                    <Projeto key={projeto.id} {...projeto}/>
                ))}
            </section>

            <div>
                <a href="" >
                    <button className={styles.projetos__button}>
                        Outros Projetos
                    </button>
                </a>
            </div>

        </article>
    ) 
}