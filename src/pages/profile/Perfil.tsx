import {
  Avatar,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Switch,
} from "@chakra-ui/react";
import { person } from "../../data/person";
import { personTable } from "../../data/personTable";
import { ArrowLeft, MoreHorizontal } from "lucide-react";

export default function Perfil() {
  const selected: person =
    personTable.find((p) => p.selected === true) ??
    ({
      nome: "Indefinido",
      ranking: 0,
      img: "",
    } as person);
  return (
    <>
      <main className="flex flex-col justify-center items-center pt-11 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full flex justify-between items-center px-4">
            <p className="w-full"></p>

            <h1 className="w-full font-bold text-xl">Perfil</h1>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  _hover={{ bg: "none", transform: "scale(1.1)" }}
                  aria-label="Menu"
                  w={100}
                  bg={"none"}
                  icon={<MoreHorizontal />}
                />
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-2">
                <button className="w-full bg-white transtition-all px-4 py-2 hover:bg-gray-300">
                  Marcar como lido
                </button>
                <button className="w-full bg-white transtition-all px-4 py-2 hover:bg-gray-300">
                  Remover todos
                </button>
              </PopoverContent>
            </Popover>
          </div>
          <div className="border-4 p-2 rounded-full border-white">
            <div className="border-2 border-black rounded-full">
              <Avatar size="2xl" name={selected.nome} src={selected.img} />
            </div>
          </div>
          {/* primriro nome, sobrenome, profissao, email, senha, toggle notificaçoes botao sair da conta */}
          <div className="flex flex-col gap-2 w-full px-4">
            <div className="flex justify-evenly">
              <div className="flex flex-col gap-1">
                <h1>Primeiro Nome</h1>
                <p className="text-sm text-gray-500 bg-white p-2 rounded-xl">{selected.nome.split(" ")[0]}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h1>Sobrenome</h1>
                <p className="text-sm text-gray-500 bg-white p-2 rounded-xl">{selected.nome.split(" ")[1]}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1>Profissão</h1>
              <p className="text-sm text-gray-500 bg-white p-2 rounded-xl"> Assistende de Gerente</p>
            </div>
            <div className="flex flex-col gap-1">
              <h1>Email</h1>
              <p className="text-sm text-gray-500 bg-white p-2 rounded-xl">
                dwight90Schrute@hotmail.com
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1>Senha</h1>
              <p className="text-sm text-gray-500 bg-white p-2 rounded-xl">*********</p>
            </div>
            <div className="flex flex-col gap-1">
              <h1>Notificações</h1>
              <Switch colorScheme="black" size={"lg"} />
            </div>
            <button className="w-fit mx-auto bg-black text-white rounded-xl transtition-all px-4 py-2 transform hover:scale-125">
              Sair da conta
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
