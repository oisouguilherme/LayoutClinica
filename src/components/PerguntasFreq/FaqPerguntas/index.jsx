import { useState } from "react";

export function FaqPerguntas({ pergunta, resposta, icon }) {
  const [showDiv, setShowDiv] = useState(false);

  function toggleDiv() {
    setShowDiv(!showDiv);
  }
  return (
    <div>
      <div className="pb-3 border-b-2 ">
        <button
          className="text-xl font-bold flex items-center text-start gap-2"
          onClick={toggleDiv}
        >
          <img src={icon} alt="" />
          {pergunta}
        </button>
        {showDiv && <div className="text-sm sm:text-base px-4 pt-2 text-start">{resposta}</div>}
      </div>
    </div>
  );
}
