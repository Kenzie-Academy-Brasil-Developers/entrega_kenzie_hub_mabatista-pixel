import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { useState } from "react";

export const CreateTechModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        console.log(formData)
    }

    const [selectedValue, setSelectedValue] = useState("Iniciante")

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <header className={styles.modalHeader}>
                    <h1>Cadastrar Tecnologia</h1>
                    <button className={styles.modalClose} onClick={onClose}>X</button>
                </header>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className={styles.inputsContainer}>
                            <div className={styles.inputDiv}>
                                <label htmlFor="title">Nome</label>
                                <input type="text" {...register("title")} />
                            </div>
                            <div className={styles.inputDiv}>
                                <label htmlFor="status">Selecionar status</label>
                                <select name="status" id="status" {...register("status")} value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>
                            <button className={styles.modalBtn} type="submit">Cadastrar tecnologia</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}