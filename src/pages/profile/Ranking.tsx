import {
    Avatar,
  IconButton,
} from "@chakra-ui/react";
import { personTable } from "../../data/personTable";
import { person } from "../../data/person";

export default function Ranking() {
  const up2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill="black" />
      <path d="M8.5 5L13.2631 11H3.73686L8.5 5Z" fill="#3D8B00" />
    </svg>
  );
  const down2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill="black" />
      <path d="M8.5 13L3.73686 7L13.2631 7L8.5 13Z" fill="#DE0E0E" />
    </svg>
  );
  const selected: person =
    personTable.find((p) => p.selected === true) ??
    ({
      nome: "Indefinido",
      ranking: 0,
      img: "",
    } as person);

  const top3: person[] = personTable
    .sort((a, b) => a.ranking - b.ranking)
    .slice(0, 3);
  const up = (
    <svg
      className="mx-auto mb-2"
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="6"
      viewBox="0 0 13 6"
      fill="none"
    >
      <path d="M6.5 0L12.9952 6H0.00480938L6.5 0Z" fill="#3D8B00" />
    </svg>
  );
  const down = (
    <svg
      className="mx-auto mb-2"
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="6"
      viewBox="0 0 13 6"
      fill="none"
    >
      <path d="M6.5 6L0.00480938 0L12.9952 0L6.5 6Z" fill="#DE0E0E" />
    </svg>
  );
  const num = (x: number) => {
    return (
      <div className="w-full text-center">
        <IconButton
          className="mt-[-40px]"
          icon={<p>{x}</p>}
          variant="solid"
          rounded={"full"}
          bg={"black"}
          color={"yellow.300"}
          _hover={{ cursor: "default" }}
          aria-label="Home"
        />
      </div>
    );
  };
  return (
    <>
      <section className="pt-11">
        <h1 className="text-center text-xl">Ranking</h1>
        <div className="flex justify-center gap-4">
          <div className="mt-auto">
            {/* segundo lugar */}
            {top3[1].pastPos > top3[1].ranking ? up : down}
            <div className="border-4 w-fit border-black rounded-full">
              <Avatar size="xl" src={top3[1].img} />
            </div>
            {num(2)}
            <p>{top3[1].nome}</p>
          </div>
          <div className="relative flex flex-col mb-14">
            {/* primeiro lugar */}
            <svg
              className="mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                d="M1 5.25L2.1084 6.13655C2.49454 6.4454 2.9434 6.66631 3.42368 6.78387C3.90397 6.90144 4.40411 6.91284 4.88925 6.81726C5.37439 6.72169 5.83285 6.52146 6.23265 6.23051C6.63246 5.93957 6.964 5.56493 7.20415 5.1327L9.5 1L11.7959 5.1327C12.0361 5.56499 12.3677 5.93968 12.7676 6.23063C13.1675 6.52158 13.6261 6.72178 14.1113 6.81727C14.5966 6.91277 15.0968 6.90126 15.5771 6.78354C16.0575 6.66582 16.5063 6.44474 16.8925 6.1357L18 5.25L16.5091 12.7045C16.444 13.0298 16.3055 13.336 16.1041 13.5997C15.9028 13.8633 15.6439 14.0776 15.3472 14.226C13.5317 15.1338 11.5298 15.6064 9.5 15.6064C7.47022 15.6064 5.46832 15.1338 3.65285 14.226C3.35614 14.0776 3.09723 13.8633 2.89587 13.5997C2.6945 13.336 2.55599 13.0298 2.4909 12.7045L1 5.25Z"
                fill="black"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.09985 11.2C8.30645 12.3331 10.6933 12.3331 12.8999 11.2"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="border-4 border-black w-fit rounded-full">
              <Avatar size="2xl" src={top3[0].img} />
            </div>
            {num(1)}
            <p>{top3[0].nome}</p>
          </div>
          <div className="mt-auto">
            {/* terceiro lugar */}
            {top3[2].pastPos > top3[2].ranking ? up : down}
            <div className="border-4 border-black w-fit rounded-full">
              <Avatar size="xl" src={top3[2].img} />
            </div>
            {num(3)}
            <p>{top3[2].nome}</p>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="flex justify-between p-5 bg-[#1B0C27] shadow-[0px,72px,20px,0px,rgba(0,0,0)] text-white rounded-xl mx-3 z-10 relative">
          <h1>Meu ranking atual</h1>
          <h1 className="flex items-center gap-2">
            <p>{selected.ranking}</p>
            <p>{selected.pastPos > selected.ranking ? up2 : down2}</p>
          </h1>
        </div>
        <div className="bg-white px-5 py-7 flex flex-col gap-4 rounded-3xl mt-[-10px] z-0 relative">
          {personTable
            .filter((e) => e.ranking > 3)
            .map((p) => (
              <>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="border-2 border-black w-fit rounded-full">
                      <Avatar size="md" src={p.img} />
                    </div>
                    <p className="my-auto italic font-bold">{p.nome}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>{p.ranking}</p>
                    <p>{p.pastPos > p.ranking ? up2 : down2}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </section>
    </>
  );
}
