import { Input } from "../../Input";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";
import { api } from "../../../services/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = ({ setUser }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userLogin = async (formData) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token); 
            toast("Login realizado com sucesso")
            navigate("/user")
        } catch (error) {
            console.log(error);
            if (error.response?.data === "Incorrect password") {
                toast("Credenciais inválidas")
            } else {
                toast("Ops! Algo deu errado.")
            }
        } finally {
            setLoading(false);
        }
    }

    const submit = (formData) => {
        userLogin(formData)
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
                        <button className="btn-disabled"> <Link to="/register" >Cadastre-se</Link></button>
                        <ToastContainer autoClose={2000} />
                    </div>
                </div>
            </form>
        </section>
    )
}