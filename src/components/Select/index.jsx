import { useState } from "react";

export const Select = () => {

    const [selectedModule, setSelectedModule] = useState("module1")

    return (
        <label>
            Selecionar módulo
            <select name="selectedModule"
                value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
                <option value="module1">Módulo 1</option>
                <option value="module2">Módulo 2</option>
                <option value="module3">Módulo 3</option>
                <option value="module4">Módulo 4</option>
                <option value="module5">Módulo 5</option>
                <option value="module6">Módulo 6</option>
            </select>
        </label>
    )
}