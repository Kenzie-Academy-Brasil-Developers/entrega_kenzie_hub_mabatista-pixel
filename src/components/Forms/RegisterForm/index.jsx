import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { Select } from "../../Select";

export const RegisterForm = () => {

    const { register, handleSubmit } = useForm();

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>Crie sua conta</h1>
            <span>Rápido e grátis, vamos nessa</span>
            <div>
                <Input label="Nome" type="text" {...register("name")} required
                    placeholder="Digite aqui seu nome..." />
            </div>
            <div>
                <Input label="Email" type="email" {...register("email")} required placeholder="Digite aqui seu email" />

            </div>
            <div>
                <Input label="Senha" type="password" {...register("password")} required placeholder="Digite aqui sua senha" />
            </div>
            <div>
                <Input label="Confirmar senha" type="password" {...register("password")} required placeholder="Confirmar senha" />
            </div>
            <div>
                <Input label="Bio" type="text" {...register("bio")} required placeholder="Fale sobre você" />
            </div>
            <div>
                <Input label="Contato" type="text" {...register("contact")} required placeholder="Opção de contato" />

            </div>
            <div>
                <Select />
            </div>
            <button type="submit">Criar conta</button>
        </form>
    )
}