import { MdEdit, MdDelete } from "react-icons/md";

export const TechCard = ({ post }) => {
    return (
        <li>
            <div>
                <div>
                    <p>{post?.title}</p>
                    <span>{post?.status}</span>
                </div>
                <div>
                    <button title="Edit" aria-label="edit">
                        <MdEdit />
                    </button>
                    <button title="Delete" aria-label="delete">
                        <MdDelete/>
                    </button>
                </div>
            </div>
        </li>
    )
}