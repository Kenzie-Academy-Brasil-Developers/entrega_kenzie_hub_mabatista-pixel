import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const UserPage = () => {
    return (
        <>
            <header className={styles.userHeader}>
                <div>
                    <img src={logo} alt="Logo Kenzie Hub" />
                </div>
                <button>
                    <Link to="/">Sair
                    </Link>
                </button>
            </header>
            <main>
                <div className={styles.userMain}>
                    <div className={styles.borderTopDiv}>
                        <h1 className="title1">Olá, Matheus Batista</h1>
                        <span>Terceiro módulo (React)</span>
                    </div>
                    <div>
                        <h1 className="title1">Que pena! Estamos em desenvolvimento :( </h1>
                        <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>

                </div>
            </main>
        </>
    )
}