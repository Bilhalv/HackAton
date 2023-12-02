import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  interface Mensagem {
    texto: string;
    fonte: string;
    data: Date;
  }
  interface Conversa {
    nome: string;
    mensagens: Mensagem[];
  }
  const [modalOpen, setModalOpen] = useState(false);
  const [showConversation, setShowConversation] = useState<Conversa>({});
  const conversas: Conversa[] = [
    {
      nome: "Davi",
      mensagens: [
        {
          texto: "Oi",
          fonte: "Davi",
          data: new Date(),
        },
        {
          texto: "Oi",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "Tudo bem?",
          fonte: "Davi",
          data: new Date(),
        },
        {
          texto: "Sim",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "E com você?",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "Também",
          fonte: "Davi",
          data: new Date(),
        },
      ],
    },
    {
      nome: "João",
      mensagens: [
        {
          texto: "Oi",
          fonte: "João",
          data: new Date(),
        },
        {
          texto: "Oi",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "Tudo bem?",
          fonte: "João",
          data: new Date(),
        },
        {
          texto: "Sim",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "E com você?",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "Também",
          fonte: "João",
          data: new Date(),
        },
      ],
    },
    {
      nome: "Maria",
      mensagens: [
        {
          texto: "Oi",
          fonte: "Maria",
          data: new Date(),
        },
        {
          texto: "Oi",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "Tudo bem?",
          fonte: "Maria",
          data: new Date(),
        },
        {
          texto: "Sim",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "E com você?",
          fonte: "Eu",
          data: new Date(),
        },
        {
          texto: "Também",
          fonte: "Maria",
          data: new Date(),
        },
      ],
    },
  ];
  const [mensagem, setMensagem] = useState<string>("");
  return (
    <>
      <main className="flex flex-col justify-center items-center pt-11">
        <div className="w-full flex justify-between items-center px-4">
          <IconButton
            _hover={{ bg: "none", transform: "scale(1.1)" }}
            aria-label="Menu"
            w={100}
            bg={"none"}
            icon={<ArrowLeft />}
          />

          <h1>Avisos</h1>
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
        <div className="w-full flex flex-col gap-2">
          {conversas.map((c) => (
            <div
              className="w-full flex justify-between items-center bg-white px-4 py-2 transition-all hover:bg-gray-300 hover:shadow-xl hover:cursor-pointer"
              onClick={() => {
                setShowConversation(c);
                setModalOpen(true);
              }}
            >
              <div className="flex flex-col gap-1">
                <h1>{c.nome}</h1>
                <p className="text-sm text-gray-500">
                  {c.mensagens[c.mensagens.length - 1].texto}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  {c.mensagens[c.mensagens.length - 1].data.toLocaleString()}
                </p>
                <div className="w-10 h-10 bg-black rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          const x = conversas.findIndex(
            (c) => c.nome === showConversation.nome
          );
          conversas[x] = showConversation;
          setModalOpen(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat com {showConversation.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-full flex flex-col gap-2">
              {showConversation.mensagens?.map((m) => (
                <div
                  className={`w-full flex flex-col gap-1 ${
                    m.fonte === "Eu"
                      ? "justify-end items-end"
                      : "justify-start items-start"
                  }`}
                >
                  <div
                    className={`flex flex-col gap-1 ${
                      m.fonte === "Eu"
                        ? "bg-yellow-300 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl"
                        : "bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
                    }`}
                  >
                    <p>{m.texto}</p>
                    <p className="text-xs text-gray-500">
                      {m.data.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-3">
              <input
                onChange={(e) => (e.target ? setMensagem(e.target.value) : "")}
                type="text"
                className="w-full bg-gray-200 rounded-xl px-4 py-2 border"
              />
              <button
                className="w-full bg-yellow-300 rounded-xl px-4 py-2"
                onClick={() => {
                  setShowConversation({
                    ...showConversation,
                    mensagens: [
                      ...showConversation.mensagens,
                      {
                        texto: mensagem,
                        fonte: "Eu",
                        data: new Date(),
                      },
                    ],
                  });
                }}
              >
                Enviar
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
