import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z.string().email("Forneça um e-mail válido").min(1, "O e-mail é obrigatório."),
    password: z.string().min(8, "São necessários pelo menos oito caracteres.")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
        .regex(/[A-Z]+/, "É necessário pelo menos uma letra maiúscula")
        .regex(/[0-9]+/, "É necessário conter pelo menos um número"),
    confirm_password: z.string().min(1, "A confirmação de senha é obrigatória."),
    bio: z.string().min(1, "Escreva uma frase que resuma você."),
    contact: z.string().min(1, "Forneça um meio de contato."),
    selectedModule: z.string().min(1, "Selecione uma opção."),
})
    .refine(({ password, confirm_password }) => password === confirm_password, {
        message: "As senhas não correspondem.",
        path: ["confirm_password"],
    });