import { createContext, useContext, useState } from "react";
import { HubContext } from "./HubContext";
import { api } from "../../services/api";
import { useEffect } from "react";


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const { user } = useContext(HubContext)
    const { techList, setTechList } = useContext(HubContext)

    // console.log(techList)
    // const [ techList, setTechList ] = useState([]);


    // useEffect(() => {
    //     const getPosts = async () => {
    //         try {
    //             const { data } = await api.get("/profile")
    //             setTechList(data.techs)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getPosts()
    // }, [])

    console.log(user)
    console.log(techList)

    // {
    //     "title": "React",
    //     "status": "Iniciante"
    //   }

    const createPost = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");


            const newPost = { ...formData };


            const { data } = await api.post("/users/techs", newPost, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setTechList([...techList, data])

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TechContext.Provider value={{createPost}}>
            {children}
        </TechContext.Provider>
    )
}