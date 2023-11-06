import { useContext, useState } from "react";
import addButton from "../../assets/addButton.svg";
import { TechCard } from "../TechCard";
import { HubContext } from "../providers/HubContext";
import { CreateTechModal } from "../CreateTechModal";
import styles from "./style.module.scss";
import { TechContext } from "../providers/TechContext";

export const TechList = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const { techList } = useContext(TechContext);


    return (
        <>
            <div className={styles.container}>
                <div className={styles.listInfo}>
                    <h1>Tecnologias</h1>
                    <button className={styles.openModalBtn} onClick={openModal}><img src={addButton} alt="Botão de adicionar" /></button>
                    <CreateTechModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
                {techList.length > 0 ? (
                    <ul>
                        {

                            techList.map((post) => (
                                <TechCard key={post.id} post={post} />
                            ))
                        }
                    </ul>
                ) : (
                    <p>Você ainda não cadastrou nenhuma tecnologia</p>
                )}
            </div>
        </>
    )
}