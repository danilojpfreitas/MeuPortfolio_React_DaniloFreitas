import styles from './PrincipaisProjetos.module.scss'
import projetos from '../../../data/projetos.json'
import { useState } from 'react'

export default function PrincipaisProjetos() {
    const [ projeto, setProjeto ] = useState(projetos)

    return (
        <article className={styles.projetos}>

            <div>

                <a href="./index.html">
                    <h2 className={styles.projetos__titulo}>Alguns projetos</h2>
                </a>

            </div>

            <section>

                {projeto.map(projeto => (
                    <div className={styles.projetos__projeto}>
                        <h4>{projeto.name}</h4>
                        <h6>{projeto.type}</h6>
                        <p>{projeto.description}</p>
                        <img src={projeto.photo} alt={projeto.name} />
                        <div className={styles.projetos__buttons}>
                            <a target="_blank" href={projeto.github}>
                                <button className={styles.projetos__button02}>
                                    GitHub
                                </button>
                            </a>
                            <a target="_blank" href={projeto.page}>
                                <button className={styles.projetos__button02}>
                                    {projeto.titlePage}
                                </button>
                            </a>
                        </div>
                    </div>
                ))}

            </section>

            <div>

                    <a href="">
                        <button className={styles.projetos__button03}>
                            Outros Projetos
                        </button>
                    </a>

            </div>

        </article>
    ) 
}