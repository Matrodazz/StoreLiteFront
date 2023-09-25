import DropMenu from "@/components/DropMenu";

export default function Produto({produto}) {
    return (
        <div id="data-row" className="rounded bg-[#1E293B] p-8 flex items-center space-x-14 hover:bg-[#2c3e5a]">
                <div className="h-[100px] w-[100px] rounded bg-[#0F172A] p-4"></div>
                <ul className="flex space-x-14"> 
                  <li>{produto.nome}</li>
                  <li>{produto.fabricante}</li>
                  <li>{produto.peso}kg</li>
                  <li>R${produto.preco}</li>
                  <li>
                    <div>
                        <DropMenu produto={produto} />
                    </div>
                 </li>
                </ul>
              </div>
    )
}