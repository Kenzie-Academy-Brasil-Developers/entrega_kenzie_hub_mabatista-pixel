import { useContext, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./style.module.scss";
import { EditTechModal } from "../EditTechModal";
import { TechContext } from "../providers/TechContext";

export const TechCard = ({ post }) => {

    const { setEditingPost, techDelete } = useContext(TechContext);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleClick = () => {
        setEditingPost(post);
        openModal();
    }

    return (
        <li className={styles.cardContainer}>
            <div className={styles.divContainer}>
                <div className={styles.cardInfo}>
                    <p>{post?.title}</p>
                    <span>{post?.status}</span>
                </div>
                <div className={styles.cardIcons}>
                    <button className={styles.iconBtn} onClick={handleClick} title="Edit" aria-label="edit">
                        <MdEdit />
                    </button>
                    <button onClick={() => techDelete(post.id)} className={styles.iconBtn} title="Delete" aria-label="delete">
                        <MdDelete />
                    </button>
                    <EditTechModal isOpen={isModalOpen} onClose={closeModal}/>
                </div>
            </div>
        </li>
    )
}