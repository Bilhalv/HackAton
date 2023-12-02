import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import Chat from "./profile/Chat";
import Home from "./profile/Home";
import Perfil from "./profile/Perfil";
import Ranking from "./profile/Ranking";
import { useState } from "react";

export default function Profile() {
  const [pagina, setPagina] = useState("Ranking");
  return (
    <>
      <body className="h-screen font-Montserrat bg-yellow-300">
        <Navbar />
        {pagina === "Home" && <Home />}
        {pagina === "Chat" && <Chat />}
        {pagina === "Ranking" && <Ranking />}
        {pagina === "Perfil" && <Perfil />}
      </body>
      <Fotter setPagina={setPagina} />
    </>
  );
}
