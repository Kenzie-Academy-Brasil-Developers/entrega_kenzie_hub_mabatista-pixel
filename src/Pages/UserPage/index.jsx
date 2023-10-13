import  logo  from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const UserPage = () => {
    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="Logo Kenzie Hub" />
                </div>
                <button>
                    <Link to="/">Sair
                    </Link>
                </button>
            </header>
            <main>
                <h1>Página do usuário</h1>
            </main>
        </>
    )
}