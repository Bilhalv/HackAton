import { IconButton } from "@chakra-ui/react";
import { Crown, Home, MessageCircle, UserRound } from "lucide-react";
import { useState } from "react";

interface Props {
  setPagina: (pagina: string) => void;
}
export default function Fotter(setPagina: Props) {
  const [paginaAtual, setPaginaAtual] = useState("Ranking");
  const icons = [
    {
      icon: <Home />,
      fonte: "Home",
    },
    {
      icon: <MessageCircle />,
      fonte: "Chat",
    },
    {
      icon: <Crown />,
      fonte: "Ranking",
    },
    {
      icon: <UserRound />,
      fonte: "Perfil",
    },
  ];
  return (
    <>
      <nav className="flex justify-evenly items-center h-16 absolute w-full px-4 bottom-0 bg-[#1B0C27] rounded-t-3xl">
        {icons.map((i) => (
          <IconButton
            onClick={() => {
              setPagina.setPagina(i.fonte);
              setPaginaAtual(i.fonte);
            }}
            isActive={paginaAtual === i.fonte}
            _active={{ color: "yellow", bg: "none", transform: "scale(1.1)" }}
            icon={i.icon}
            aria-label={i.fonte}
            bg={"none"}
            _hover={{ bg: "none", transform: "scale(1.1)" }}
            w={100}
            color={"white"}
          />
        ))}
      </nav>
    </>
  );
}
