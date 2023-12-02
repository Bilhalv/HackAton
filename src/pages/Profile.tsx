import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import Ranking from "./profile/Ranking";
import { useState } from "react";

export default function Profile() {
  const [pagina, setPagina] = useState("Ranking");
  return (
    <>
      <body className="h-screen font-Montserrat bg-yellow-300">
        <Navbar />
        {pagina === "Ranking" && <Ranking />}
      </body>
      <Fotter setPagina={setPagina} />
    </>
  );
}
