"use client"

import { create, update } from "@/actions/produtos";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'
export default function FormEdit({produto}){
    const [ error, setError ] = useState("")
    const [produtoEdit, setProdutoEdit] = useState(produto)
    
    async function handleSubmit(){
        const resp =  await update(produtoEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }
        
       redirect("/produtos")
    }

    function handleFieldChange(field, value){
        setProdutoEdit({
            ...produtoEdit,
            [field]: value
        })
    }

    return (
        <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Editar Produtos</h1>
                    <TextField
                        label="Nome"
                        id="nome"
                        name="nome"
                        value={produtoEdit.nome}
                        onChange={(e) => handleFieldChange("nome", e.target.value )}
                    />

                    <TextField
                        label="Fabricante"
                        id="fabricante"
                        name="fabricante"
                        value={produtoEdit.fabricante}
                        onChange={(e) => handleFieldChange("fabricante", e.target.value )}
                    />

                    
                    <TextField
                        label="Peso"
                        id="peso"
                        name="peso"
                        value={produtoEdit.peso}
                        onChange={(e) => handleFieldChange("peso", e.target.value )}
                    />

                    
                    <TextField
                        label="Preco"
                        id="preco"
                        name="preco"
                        value={produtoEdit.preco}
                        onChange={(e) => handleFieldChange("preco", e.target.value )}
                    />

                    <div className="flex justify-around mt-4">
                        <Button href="/produtos" variant="secondary">Cancelar</Button>
                        <Button type="button">
                            <CheckCircleIcon className="h-6 w-6" />
                            Salvar
                        </Button>

                    </div>

                    <span className="text-red-400">{error}</span>

                </form>
            </main>

    )
}