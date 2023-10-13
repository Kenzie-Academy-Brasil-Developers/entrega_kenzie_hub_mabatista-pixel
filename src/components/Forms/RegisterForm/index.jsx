import { useForm } from "react-hook-form";
import { Input } from "../../Input";

export const RegisterForm = () => {

    const { register, handleSubmit } = useForm();


    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1></h1>
            <div>
                <Input label="name" type="text" {...register("name")} required
                    placeholder="Digite aqui seu nome..." />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Senha</label>
                <input type="password" {...password("password")} />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""></label>
                <select name="" id=""></select>
            </div>
            <button type="submit">Criar conta</button>
        </form>
    )
}