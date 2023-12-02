import { Avatar } from "@chakra-ui/react";
import { person } from "../../data/person";
import { personTable } from "../../data/personTable";

export default function Home() {

    const selected: person =
        personTable.find((p) => p.selected === true) ??
        ({
            nome: "Indefinido",
            ranking: 0,
            img: "",
        } as person);

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center pt-11">
                    <h1 className="text-center text-xl">Home</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-fit mt-11">
                    <div className="border-4 border-black rounded-full">
                        <Avatar src={selected.img} size="2xl" />
                    </div>
                    <h1 className="text-2xl mt-2 text-black">Dwight Schrute</h1>
                    <h1 className="text-l text-gray-500">Assistente de Gerente | Setor de vendas </h1>
                    <h1 className="text-l text-gray-500">Nivel: 9</h1>
                </div>
            </div>
        </>
    );
}
