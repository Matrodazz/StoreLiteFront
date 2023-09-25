"use client"

import { create } from "@/actions/produtos";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { useState } from "react";

import { redirect } from 'next/navigation'

export default function FormProdutos() {
    const [ error, setError ] = useState("")
    
    async function handleSubmit(formData){
        const resp =  await create(formData)

        if (resp.message) {
            setError(resp.message)
            return
        }
       redirect("/produtos")
    }

    return (
        <>
            <NavBar active="produtos" />

            <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
                <form action={handleSubmit}>
                <h1 className="text-2xl">Cadastrar Produtos</h1>
                    <TextField
                        label="Nome"
                        id="nome"
                        name="nome"
                    />

                    <TextField
                        label="Fabricante"
                        id="fabricante"
                        name="fabricante"
                    />

                    <TextField
                        label="Peso"
                        id="peso"
                        name="peso"
                    />

                    <TextField
                        label="Preco"
                        id="preco"
                        name="preco"
                    />

                    <div className="flex justify-around mt-4">
                        <Button href="/produtos" variant="secondary">Cancelar</Button>
                        <Button type="button">
                            Salvar
                        </Button>

                    </div>

                    <span className="text-red-400">{error}</span>

                </form>
            </main>
        </>

    )
}
