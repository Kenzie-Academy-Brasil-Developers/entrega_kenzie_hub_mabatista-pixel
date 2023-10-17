import { forwardRef, useState } from "react";
import styles from "./style.module.scss";

// export const Select = () => {

//     const [selectedModule, setSelectedModule] = useState("module1")

//     return (
//         <div>
//             <label>
//                 Selecionar módulo
//                 <select name="selectedModule"
//                     value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
//                     <option value="module1">Primeiro Módulo </option>
//                     <option value="module2">Segundo Módulo </option>
//                     <option value="module3">Terceiro Módulo </option>
//                     <option value="module4">Quarto Módulo </option>
//                     <option value="module5">Quinto Módulo </option>
//                     <option value="module6">Sexto Módulo </option>
//                 </select>
//             </label>
//         </div>
//     )
// }

export const Select = forwardRef(({ id, label, ...rest }, ref) => {

    const [selectedModule, setSelectedModule] = useState("module1")

    return (

        <div>
            <label htmlFor={id}>{label}</label>
            <select ref={ref} {...rest}
                value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
                <option value="module1">Primeiro Módulo </option>
                <option value="module2">Segundo Módulo </option>
                <option value="module3">Terceiro Módulo </option>
                <option value="module4">Quarto Módulo </option>
                <option value="module5">Quinto Módulo </option>
                <option value="module6">Sexto Módulo </option>
            </select>
        </div>

    )
})

