import { forwardRef, useState } from "react";

export const Select = forwardRef(({ id, label, ...rest }, ref) => {

    const [selectedModule, setSelectedModule] = useState("Primeiro Módulo")

    return (

        <div>
            <label htmlFor={id}>{label}</label>
            <select ref={ref} {...rest}
                value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
                <option value="Primeiro Módulo">Primeiro Módulo </option>
                <option value="Segundo Módulo">Segundo Módulo </option>
                <option value="Terceiro Módulo">Terceiro Módulo </option>
                <option value="Quarto Módulo">Quarto Módulo </option>
                <option value="Quinto Módulo">Quinto Módulo </option>
                <option value="Sexto Módulo">Sexto Módulo </option>
            </select>
        </div>

    )
})

