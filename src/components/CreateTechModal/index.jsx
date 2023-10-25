import { useForm } from "react-hook-form";

export const CreateTechModal = () => {

    const { register, handleSubmit} = useForm({});


    return(
        <div>
            <div>
                <header>
                    <h1>Cadastrar Tecnologia</h1>
                    <button>X</button>
                </header>
                <main>
                    <form>
                        <label htmlFor=""></label>


                    </form>
                </main>
            </div>
        </div>

    )
}