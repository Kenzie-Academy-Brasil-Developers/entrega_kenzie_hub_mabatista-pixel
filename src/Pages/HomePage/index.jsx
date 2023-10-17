import { Link } from "react-router-dom";
import { DefaultTemplate } from "../../components";
import { LoginForm } from "../../components/Forms/LoginForm";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss"

export const HomePage = () => {
    return (
        <>
            <div className={styles.pageContainer}>
                <header className={styles.headerBox}>
                    <div>
                        <img src={logo} alt="Logo Kenzie Hub" />
                    </div>
                </header>
                <main className={styles.main}>
                    <LoginForm />
                </main>
            </div>
        </>
    )
}