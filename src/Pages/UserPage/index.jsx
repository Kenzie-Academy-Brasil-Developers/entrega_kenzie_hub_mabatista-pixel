import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { HubContext } from "../../components/providers/HubContext";
import { useContext } from "react";
import { TechList } from "../../components/TechList";
import { HorizontalLine } from "../../components/HorizontalLine";


export const UserPage = () => {

    const { user, userLogout} = useContext(HubContext);

    return (
        <>
            <div className={styles.pageContainer}>
                <header className={styles.userHeader}>
                    <div className={styles.headerDivButton}>
                        <img src={logo} alt="Logo Kenzie Hub" />
                        <Link to="/" onClick={() => userLogout()} > Sair</Link>
                    </div>
                    <HorizontalLine />
                    <div className={styles.headerDivInfo}>
                        <h1 className="title1">Olá, {user?.name}</h1>
                        <span>{user?.course_module}</span>
                    </div>
                </header >
                <HorizontalLine />
                <main className={styles.userMain}>
                    <div className={styles.boxContainer}>
                        <div className={styles.notificationDiv}>
                            <TechList />
                        </div>
                    </div>
                </main>
            </div >

        </>
    )
}