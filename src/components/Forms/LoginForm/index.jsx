import { Input } from "../../Input";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";

export const LoginForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <section className={styles.formSection}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={styles.inputContainer}>
                    <h1 className="title1" >Login</h1>
                    <div>
                        <Input className={styles.input} label="Email" type="email" id="email" placeholder="Digite aqui seu e-mail" error={errors.email} {...register("email")} />
                    </div>
                    <div>
                        <Input className={styles.input} label="Senha" type="password" id="password" placeholder="Digite aqui sua senha" error={errors.password} {...register("password")} />
                    </div>
                    <button className="btn-primary" type="submit">Entrar</button>
                    <div>
                        <p>Ainda não possui uma conta?</p>
                        <button className="btn-disabled"> <Link to="/register">Cadastre-se</Link></button>
                    </div>
                </div>
            </form>
        </section>
    )
}