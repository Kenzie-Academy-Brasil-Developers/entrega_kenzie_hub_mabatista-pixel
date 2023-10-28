import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../../Input";
import { Select } from "../../Select";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { HubContext } from "../../providers/HubContext";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const [loading, setLoading] = useState(false);

    const { userRegister } = useContext(HubContext)

    const navigate = useNavigate();

    const submit = (formData) => {
        userRegister(formData, setLoading);
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <div className={styles.registerFormContainer}>
                    <h1>Crie sua conta</h1>
                    <span>Rápido e grátis, vamos nessa</span>
                    <div>
                        <Input label="Nome" type="text" {...register("name")} error={errors.name}
                            placeholder="Digite aqui seu nome..." />
                    </div>
                    <div>
                        <Input label="Email" type="email" {...register("email")} error={errors.email} placeholder="Digite aqui seu email" />
                    </div>
                    <div>
                        <Input label="Senha" type="password" {...register("password")} error={errors.password} placeholder="Digite aqui sua senha" />
                    </div>
                    <div>
                        <Input label="Confirmar senha" type="password" {...register("confirm_password")} error={errors.confirm_password} placeholder="Confirmar senha" />
                    </div>
                    <div>
                        <Input label="Bio" type="text" {...register("bio")} error={errors.bio} placeholder="Fale sobre você" />
                    </div>
                    <div>
                        <Input label="Contato" type="text" {...register("contact")} error={errors.contact} placeholder="Opção de contato" />
                    </div>
                    <div className={styles.selectDiv}>
                        <Select label="Selecionar módulo" {...register("course_module")} error={errors.course_module} id="course_module" />
                    </div>
                    <button className="btn-primary-negative" type="submit" disabled={loading}>Cadastrar</button>
                    <ToastContainer autoClose={3000} />
                </div>
            </form>
        </>
    )
}