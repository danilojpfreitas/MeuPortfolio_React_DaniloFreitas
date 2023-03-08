import styles from './Main.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ButtonResumo from 'pages/main/resumo'
import Header from 'components/header'
import Footer from 'components/footer'
import Contatos from 'components/contatos'
import PrincipaisProjetos from './projetos'

export default function Main() {

    return (
        <>
        <Header />

    <main>
        <section className={styles.main}>
            <div className={styles.main__name}>
                <h1>Olá, <span></span></h1>
                <h1>Meu nome é <span></span></h1>
                <h1>Danilo <span></span></h1>
                <h5>Um pouco mais sobre mim :) </h5> 
            </div>

            <div>
                <ButtonResumo />
            </div>

            <div>
                <a target="_blank" href="https://github.com/danilojpfreitas">
                    <button className={styles.button01}>Meu Portfólio</button>
                </a>
            </div>

            {/* <div class="form">
                <form action="">
                    <input type="text" placeholder="seu melhor email :)">
                    <button>enviar!</button>
                </form>
            </div> */}
        </section>
    </main>

    <PrincipaisProjetos />

    <Contatos />

    <Footer />
    </>
    )
}