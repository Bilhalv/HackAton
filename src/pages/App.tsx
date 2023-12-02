import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [showIcon, setShowIcon] = useState(
    <div className="text-white">
      <Eye />
    </div>
  );
  const handleClick = () => {
    setShow(!show);
    if (show) {
      setShowIcon(
        <div className="text-white">
          <Eye />
        </div>
      );
    } else {
      setShowIcon(
        <div className="text-gray-500">
          <EyeOff />
        </div>
      );
    }
  };
  return (
    <>
      <body className="h-screen bg-fixed bg-no-repeat bg-cover font-Montserrat bg-main">
        <img src="./logo.png" className="mx-auto mb-9 pt-16" />
        <article className=" mx-11 text-white flex flex-col items-center w-[275]">
          <div className="text-center flex flex-col gap-4 mb-9">
            <h1 className="text-2xl">Bem vindo de volta</h1>
            <p>Faça login para continuar</p>
          </div>
          <div className="mb-6 w-full">
            <label htmlFor="cadastro">Cadastro</label>
            <div className="bg-black rounded-xl bg-opacity-10">
              <Input border={"none"} placeholder="| Insira seu cadastro" />
            </div>
          </div>
          <div className="mb-9 w-full">
            <label htmlFor="senha">Senha</label>
            <InputGroup size="md" className="flex flex-col">
              <div className="bg-black rounded-xl bg-opacity-10">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="| Insira sua senha"
                  border={"none"}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    aria-label="Mostrar senha"
                    onClick={handleClick}
                    icon={showIcon}
                    bgColor={"transparent"}
                    _hover={{ bgColor: "transparent", transform: "scale(1.1)" }}
                  />
                </InputRightElement>
              </div>
            </InputGroup>
            <a
              href="/register"
              className="text-left text-white hover:underline text-sm"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Button
            colorScheme="yellow"
            _hover={{ 
              transform: "scale(1.1)",
              shadow: "10px 10px 25px 0px rgba(255, 221, 42, 0.40)",
            }}
            rounded={"2xl"}
            px={10}
            py={5}
            size="lg"
          >
            Acessar
          </Button>
        </article>
      </body>
    </>
  );
}

export default App;
