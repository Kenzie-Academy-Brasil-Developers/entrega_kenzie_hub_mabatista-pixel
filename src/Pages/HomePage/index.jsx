import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <main>
            <h1>Página inicial</h1>
            <button>
                <Link to="/register">Cadastre-se</Link>
            </button>
        </main>
    )
}