import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { Select } from "../../Select";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });


    const submit = (formData) => {
        console.log(formData);
    }


    return (
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
                    <Select label="Selecionar módulo" {...register("selectedModule")} error={errors.selectedModule} />
                </div>
                <button className="btn-primary-negative" type="submit">Cadastrar</button>
            </div>
        </form>
    )
}