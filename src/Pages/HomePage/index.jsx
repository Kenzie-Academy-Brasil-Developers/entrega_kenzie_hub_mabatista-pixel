import { Link } from "react-router-dom";
import { DefaultTemplate } from "../../components";
import { LoginForm } from "../../components/Forms/LoginForm";
import logo from "../../assets/logo.svg"

export const HomePage = () => {
    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="Logo Kenzie Hub" />
                </div>
            </header>
            <main>
                <LoginForm />
            </main>
        </>
    )
}