import NavBar from "@/components/NavBar";
import Produto from "./Produto";
import Button from "@/components/Button";
import { PlusIcon  } from '@heroicons/react/24/outline'
import { getProdutos } from "@/actions/produtos";

export default async function Produtos() {
    const data = await getProdutos();
  
    return (
      <>
        <NavBar active={"produtos"} />
        <main>
          <h1>Produtos</h1>
          <div className="rounded bg-[#0F172A] p-10 mx-20 my-10">
            <div className="flex flex-col items-center space-y-10">
              <input
                type="text"
                placeholder="Procure um produto..."
                className="rounded px-4 py-2 w-[700px] bg-[#1E293B] flex hover:bg-[#2c3e5a]"
              />
  
              <Button href="/produtos/new">
              <PlusIcon className="h6 w-6" />
                Cadastrar Produto
              </Button>
  
              
              <div id="data">
                {data.map(produto => <Produto key={produto.id} produto={produto} />)}
            </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  