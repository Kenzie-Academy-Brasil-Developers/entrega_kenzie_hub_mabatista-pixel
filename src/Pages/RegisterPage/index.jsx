import { DefaultTemplate, RegisterForm } from "../../components"
import  logo  from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export const RegisterPage = () => {
    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="Logo Kenzie Hub" />
                </div>
                <div>
                    <button>
                        <Link to="/">Voltar</Link>
                    </button>
                </div>
            </header>
            <main>
                <RegisterForm />
            </main>
        </>
    )
}