import LoadingIcon from "../../assets/loadingIcon.svg";
import styles from "./styles.module.scss";

export const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <img src={LoadingIcon} alt="Loading Icon" />
        </div>
    )
}