import Link from "next/link";

export default function NavBar({ active }) {
  return (
    <nav className="flex justify-between items-center bg-[#160C28] py-2 px-4">
      <ul className="flex gap-14 items-end text-[#52525B]">
        <li>
          <Link href="/">
            <h1 className="text-[#F0F4EF] text-2xl font-bold">STORELITE</h1>
          </Link>
        </li>
        <li>
          <Link className={active === "produtos" ? "text-[#F0F4EF]" : ""} href="/produtos">
            Produtos
          </Link>
        </li>
        <li>
          <Link className={active === "lojas" ? "text-[#F0F4EF]" : ""} href="/lojas">
            Lojas
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4 ml-auto">
        <div className="h-12 w-12 rounded-sm overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="Avatar" />
        </div>
        <Link href="/perfil">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
            <path d="M14 4H20M20 4V10M20 4L12 12" stroke="#52525B" stroke-width="2"/>
            <path d="M11 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V13" stroke="#52525B" stroke-width="2" stroke-linecap="round"/>
        </svg>
        </Link>
      </div>
    </nav>
  );
}
