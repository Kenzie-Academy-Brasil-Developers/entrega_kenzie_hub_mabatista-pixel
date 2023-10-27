import { createContext, useContext, useState } from "react";
import { HubContext } from "./HubContext";
import { api } from "../../services/api";
import { useEffect } from "react";


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const { user } = useContext(HubContext)
    const { techList, setTechList } = useContext(HubContext)
    const [editingPost, setEditingPost] = useState(null);


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
        <TechContext.Provider value={{ createPost, editingPost, setEditingPost }}>
            {children}
        </TechContext.Provider>
    )
}