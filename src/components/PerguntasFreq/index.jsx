import { FaqPerguntas } from "./FaqPerguntas";
import IconPlus from "../../assets/plus.svg";

export function PerguntasFreq() {
  return (
    <div className="py-12 px-4 sm:px-12 xl:px-32 flex flex-col lg:flex-row gap-4 lg:gap-24 text-center lg:text-start">
      <div className="space-y-12 lg:w-1/2">
        <h2 className="text-4xl font-bold text-cyan-400">Perguntas Frequentes</h2>

        <div className="space-y-4">
          <FaqPerguntas
            pergunta={"Como ocorre a marcação de procedimento?"}
            resposta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta, quaerat adipisci incidunt officia officiis veritatis ipsam eius, et doloribus accusantium temporibus distinctio, excepturi fuga eaque error quod aspernatur aliquid?"
            }
            icon={IconPlus}
          />
          <FaqPerguntas
            pergunta={"Como ocorre a marcação de procedimento?"}
            resposta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta, quaerat adipisci incidunt officia officiis veritatis ipsam eius, et doloribus accusantium temporibus distinctio, excepturi fuga eaque error quod aspernatur aliquid?"
            }
            icon={IconPlus}
          />
          <FaqPerguntas
            pergunta={"Como ocorre a marcação de procedimento?"}
            resposta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta, quaerat adipisci incidunt officia officiis veritatis ipsam eius, et doloribus accusantium temporibus distinctio, excepturi fuga eaque error quod aspernatur aliquid?"
            }
            icon={IconPlus}
          />
          <FaqPerguntas
            pergunta={"Como ocorre a marcação de procedimento?"}
            resposta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta, quaerat adipisci incidunt officia officiis veritatis ipsam eius, et doloribus accusantium temporibus distinctio, excepturi fuga eaque error quod aspernatur aliquid?"
            }
            icon={IconPlus}
          />
          <FaqPerguntas
            pergunta={"Como ocorre a marcação de procedimento?"}
            resposta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta, quaerat adipisci incidunt officia officiis veritatis ipsam eius, et doloribus accusantium temporibus distinctio, excepturi fuga eaque error quod aspernatur aliquid?"
            }
            icon={IconPlus}
          />
          <FaqPerguntas
            pergunta={"Como ocorre a marcação de procedimento?"}
            resposta={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta, quaerat adipisci incidunt officia officiis veritatis ipsam eius, et doloribus accusantium temporibus distinctio, excepturi fuga eaque error quod aspernatur aliquid?"
            }
            icon={IconPlus}
          />
        </div>
      </div>
      <div className="md:w-1/2 space-y-4 flex flex-col items-center lg:items-start bg-gray-100 md:px-8 py-8 rounded-md shadow-xl h-fit">
        <h2 className="text-3xl sm:text-4xl font-medium">Você pode usar o seu plano de saúde?</h2>
        <p className="text-2xl font-bold text-cyan-400">Lorem, ipsum dolor.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          libero sint sequi fugit magnam cumque obcaecati at vel iure
          temporibus, assumenda sit nihil et, modi quos eius possimus,
          doloremque blanditiis!
        </p>

        <a href="@" className="bg-cyan-500 hover:bg-cyan-600 px-8 py-2 text-white font-bold rounded-lg shadow-lg flex">Saber mais</a>
      </div>
    </div>
  );
}
