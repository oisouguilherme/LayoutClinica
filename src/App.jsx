import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { ConhecaClinica } from "./components/ConhecaClinica";
import { SlideCarrousel } from "./components/SlideCarrousel";
import { FaqPerguntas } from "./components/FaqPerguntas";
import IconPlus from './assets/plus.svg'

function App() {
  return (
    <>
      <div className="bg-main ">
        <Header/>
        <Main/>
      </div>
      <Services/>
      <ConhecaClinica/>
      <SlideCarrousel/>
      <FaqPerguntas pergunta={"Como ocorre a marcação de procedimento?"} resposta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta, quaerat adipisci incidunt officia officiis veritatis ipsam eius, et doloribus accusantium temporibus distinctio, excepturi fuga eaque error quod aspernatur aliquid?"} icon={IconPlus}/>
    </>
  )
}

export default App
