import { createContext } from "react";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const HubContext = createContext({});

export const HubProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [techList, setTechList] = useState([]);
    const [user, setUser] = useState(null);

    const pathname = window.location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        const getUser = async () => {

            if (token && userId) {

                try {
                    setLoading(true);
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUser(data)
                    setTechList(data.techs)
                    navigate(pathname)

                } catch (error) {
                    console.log(error)
                    localStorage.removeItem("@TOKEN");
                    localStorage.removeItem("@USERID");
                } finally {
                    setLoading(false)
                }
            }
        };
        getUser();
    }, []);

    const navigate = useNavigate();


    const userRegister = async (formData, setLoading) => {
        try {
            setLoading(true);
            await api.post("/users", formData);
            toast("Cadastro realizado com sucesso.")
            navigate("/")
        } catch (error) {
            if (error.response?.data === "Email already exists") {
                toast("Usuário já cadastrado.")
            } else {
                toast("Ops! Algo deu errado.")
            }
        }
        finally {
            setLoading(false);
        }
    }

    const userLogin = async (formData, setLoading) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id)
            setUser(data.user)
            toast("Login realizado com sucesso")
            navigate("/user")
        } catch (error) {
            console.log(error);
            if (error.response?.data === "Incorrect password") {
                toast("Credenciais inválidas")
            } else {
                toast("Ops! Algo deu errado.")
            }
        } finally {
            setLoading(false);
        }
    }


    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@USERID")
        localStorage.removeItem("@TOKEN")
        navigate("/")
    }


    return (
        <HubContext.Provider value={{ loading, user, setUser, userRegister, userLogin, userLogout, techList, setTechList }}>
            {children}
        </HubContext.Provider>
    )
}

