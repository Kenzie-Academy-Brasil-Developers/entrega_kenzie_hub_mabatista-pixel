import { Input } from "../../Input";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    return (
        <form>
            <div>
                <h1>Login</h1>
                <div>
                    <Input label="Email" type="email" required placeholder="Digite aqui seu e-mail" />
                </div>
                <div>
                    <Input label="Senha" type="password" required placeholder="Digite aqui sua senha" />
                </div>
                <button type="submit">Entrar</button>
                <div>
                    <p>Ainda não possui uma conta?</p>
                    <button>   <Link to="/register">Cadastre-se</Link></button>
                </div>
            </div>
        </form>
    )
}