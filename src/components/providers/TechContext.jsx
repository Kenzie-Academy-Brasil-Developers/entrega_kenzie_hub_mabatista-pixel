import { createContext, useContext, useState } from "react";
import { HubContext } from "./HubContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";

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

    const techUpdate = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            const { data } = await api.put(`/users/techs/${editingPost.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newTechList = techList.map((post) => {
                if (post.id === editingPost.id) {
                    return data;
                } else {
                    return post;
                }
            });

            setTechList(newTechList);
            setEditingPost(null);

        } catch (error) {
            console.log(error);
        }
    }

    const techDelete = async (deletingId) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            await api.delete(`/users/techs/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const newPostList = techList.filter((post) => post.id !== deletingId);
            setTechList(newPostList);

            toast("Exclusão realizada com sucesso!")

        } catch (error) {
            console.log(error)
            toast("Ops! Algo deu errado...")
        }
    }

    return (
        <TechContext.Provider value={{ createPost, editingPost, setEditingPost, techUpdate, techDelete }}>
            {children}
        </TechContext.Provider>
    )
}