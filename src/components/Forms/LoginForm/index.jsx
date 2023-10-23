import { Input } from "../../Input";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";
import { api } from "../../../services/api";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { HubContext } from "../../providers/HubContext";

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const { setUser } = useContext(HubContext)

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { userLogin } = useContext(HubContext);


    const submit = (formData) => {
        userLogin(formData, setLoading)
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
                    <button className="btn-primary" type="submit" disabled={loading}>Entrar</button>
                    <div>
                        <p>Ainda não possui uma conta?</p>
                        <Link className="btn-disabled" to="/register" >Cadastre-se</Link>
                        <ToastContainer autoClose={2000} />
                    </div>
                </div>
            </form>
        </section>
    )
}