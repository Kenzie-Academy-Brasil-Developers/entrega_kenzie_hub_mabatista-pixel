import { Input } from "../../Input";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const LoginForm = () => {
    return (
        <section className={styles.formSection}>
            <form>
                <div className={styles.inputContainer}>
                    <h1 className="title1" >Login</h1>
                    <div>
                        <Input className={styles.input} label="Email" type="email" required placeholder="Digite aqui seu e-mail" />
                    </div>
                    <div>
                        <Input className={styles.input} label="Senha" type="password" required placeholder="Digite aqui sua senha" />
                    </div>
                    <button className="btn-primary" type="submit">Entrar</button>
                    <div>
                        <p>Ainda não possui uma conta?</p>
                        <button className="btn-disabled">   <Link to="/register">Cadastre-se</Link></button>
                    </div>
                </div>
            </form>
        </section>
    )
}