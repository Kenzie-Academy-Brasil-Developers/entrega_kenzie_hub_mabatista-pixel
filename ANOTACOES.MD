# React Router DOM:

## Passo 1: 
Envolver o componente "\<App/>" com o "\<BrowserRouter>\</BrowserRouter>" no arquivo main.jsx

## Passo 2:
Criar uma pasta "routes" com um componente "RouterMain", seguindo o seguinte exemplo:

import { Route, Routes } from "react-router-dom";
import { ErrorPage, Page1, Page2 } from "../Pages";

export default () => {
    return (
    <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    ) 
};

# Passo 3:
Referenciar o componente "<RouterMain/>" dentro do arquivo "App.jsx"

# Vercel

## Primeiro:
Aplicações React são Single Page Application (aplicação de página única)

## Segundo:
Por ser uma SPA precisamos fazer a seguinte configuração do vercel, criando um arquivo "vercel.json"

{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination":"index.html"
        }
    ]
}

