import { LoginForm } from "../../components/Forms/LoginForm";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export const HomePage = ({ setUser }) => {
    return (
        <>
            <div className={styles.pageContainer}>
                <header className={styles.headerBox}>
                    <div>
                        <img src={logo} alt="Logo Kenzie Hub" />
                    </div>
                </header>
                <main className={styles.main}>
                    <LoginForm setUser={setUser} />
                </main>
            </div>
        </>
    )
}