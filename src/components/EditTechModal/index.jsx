import { useContext } from "react";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { TechContext } from "../providers/TechContext";

export const EditTechModal = ({ isOpen, onClose}) => {

    if (!isOpen) return null;

    const {editingPost, setEditingPost} = useContext(TechContext);

    const { register, handleSubmit } = useForm({
        values: {
            title: editingPost.title,
            status: editingPost.status,
        },
    });

    const handleClick = () => {
        setEditingPost(null)
        onClose();
    }

    console.log(editingPost);

  

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <header className={styles.modalHeader}>
                    <h1>Tecnologia Detalhes</h1>
                    <button className={styles.modalClose} onClick={handleClick}>X</button>
                </header>
                <div className={styles.formContainer}>
                    <form>
                        <div className={styles.inputsContainer}>
                            <div className={styles.inputDiv}>
                                <label htmlFor="title">Nome do projeto</label>
                                <input type="text" {...register("title")} />
                            </div>
                            <div className={styles.inputDiv}>
                                <label htmlFor="status">Status</label>
                                <select name="status" id="status" {...register("status")}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>
                            <button className={styles.modalBtn} type="submit">Salvar alterações</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}