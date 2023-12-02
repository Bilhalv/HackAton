import { ArrowLeft, MoreHorizontal } from "lucide-react";

export default function Chat() {
  return (
    <>
      <main className="flex flex-col justify-center items-center pt-11">
        <div className="w-full flex justify-between">
          <button className="left-0 top-0 h-full flex justify-center items-center">
            <ArrowLeft />
          </button>
          <h1>Avisos</h1>
          <button>
            <MoreHorizontal />
          </button>
        </div>
      </main>
    </>
  );
}
