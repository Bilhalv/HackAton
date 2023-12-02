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
                <div className="w-[320] mt-3 rounded" style={{ backgroundColor: '#1B0C27' }}>
                    <div className="flex w-3/4 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                        <h1 className="text-white">Metas</h1>
                    </div>
                    <div className="">
                        <h1 className="text-white">Meta 1</h1>

                    </div>
                </div>
            </div>
        </>
    );
}
