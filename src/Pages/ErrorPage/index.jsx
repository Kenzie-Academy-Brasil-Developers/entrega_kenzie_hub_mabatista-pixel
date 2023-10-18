import styles from "./style.module.scss";

export const ErrorPage = () => {
    return(
        <main className={styles.errorPage}>
            <h1>Error: 404</h1>
            <p>Não foi possível encontrar a página!</p>
        </main>
    )
}