
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";
import { getProduto } from "@/actions/produtos";

export default async function FormProdutos({params}) {
    
    const produto = await getProduto(params.id)
        
    return (
        <>
            <NavBar active="produtos" />
            <FormEdit produto={produto} />
        </>
    )
}