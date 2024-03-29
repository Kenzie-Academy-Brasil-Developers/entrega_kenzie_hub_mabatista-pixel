import { RegisterForm } from "../../components";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const RegisterPage = () => {
    return (
        <>
            <div className={styles.pageContainer}>
                <header className={styles.registerHeader}>
                    <div>
                        <img src={logo} alt="Logo Kenzie Hub" />
                    </div>
                    <div>
                        <Link to="/">Voltar</Link>
                    </div>
                </header>
                <main>
                    <RegisterForm />
                </main>
            </div>
        </>
    )
}