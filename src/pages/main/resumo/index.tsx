import styles from './Resumo.module.scss'
import { ReactComponent as Caret } from 'assets/resumo/caret-down-solid.svg'
import resumoJson from '../../../data/resumo.json'
import { useState } from 'react';

type Iresumo = typeof resumoJson;

export default function ButtonResumo() {
    function displayAbout() {
        if (resumo === false) {
            return setResumo(true)
        } else {
            return setResumo(false) 
        }
    }

    const [resumo, setResumo] = useState(false);

    return (
        <div>
            <button onClick={() => displayAbout()} className={styles.arrow__button}>
                <div>
                    <Caret className={`${styles.arrow__arrow} ${resumo === true ? styles.arrow__animationAtive : ""}`}/>
                </div>
            </button>
            <div className={`${styles.about} ${resumo === true ? styles.about__text : ""}`}>
                {resumoJson.resumo_01}
                <br />
                <br />
                {resumoJson.resumo_02}
                <br />
                <br />
                {resumoJson.resumo_03}
                <br />
                <br />
                {resumoJson.chamada}
            </div>
        </div>
    )
}