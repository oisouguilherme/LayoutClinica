import { useState } from "react";

export function FaqPerguntas({ pergunta, resposta,icon }){
  const [showDiv, setShowDiv] = useState(false);

  function toggleDiv() {
    setShowDiv(!showDiv);
  }
  return (
    <div className="my-12 lg:w-1/2 px-2 sm:px-12 xl:px-28">
      <div className="pb-1 border-b-2 ">
        <button className="sm:text-xl font-bold flex items-center gap-2" onClick={toggleDiv}><img src={icon} alt="" />{pergunta}</button>
        {showDiv && <div>{resposta}</div>}
      </div>
    </div>
  );
}