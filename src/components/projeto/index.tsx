import styles from './Projeto.module.scss'
import projetos from 'data/projetos.json'

type Props = typeof projetos[0];

export default function Projeto(props: Props) {
    const { name,type,description,photo,github,page,titlePage } = props;
    return (
            <div className={styles.projeto}>
                <h4>{name}</h4>
                <h6>{type}</h6>
                <p>{description}</p>
                {photo === "" ? "" : <img src={photo} alt={name} />}
                <div className={styles.projeto__buttons}>
                    <a target="_blank" href={github}>
                        <button className={styles.projeto__button02}>
                            GitHub
                        </button>
                    </a>
                    {page === "" ? "" :
                        <a target="_blank" href={page}>
                            <button className={styles.projeto__button02}>
                                {titlePage}
                            </button>
                        </a>
                    }
                </div>
            </div>
        )
}